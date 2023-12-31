import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import axios from "axios";

import styles from "./TravelMap.module.css";

const libraries = ["places"];
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const defaultCenter = {
  lat: 37.5665,
  lng: 126.978,
};

const TravelMap = ({ onLocationSelect }) => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태값
  const [selectedLocation, setSelectedLocation] = useState(null); // 선택된 위치 상태값
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  const [selectedLocationName, setSelectedLocationName] = useState("");

  const autocompleteInput = useRef(null); // 자동완성 입력 요소
  const mapRef = useRef(); // 구글 맵 요소

  useEffect(() => {
    if (!isLoaded) return; // 로드 실패 시 종료

    // 자동완성 기능 설정
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInput.current,
      { types: ["establishment"] }
    );

    // 자동완성 결과 변화되면 실행되는 함수
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        // 선택 장소로 위치 설정
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });

        // 지역 이름을 추출하여 설정
        const addressComponents = place.address_components;
        let locationName = "";
        console.log(place.address_components);
        for (let i = 0; i < addressComponents.length; i++) {
          const component = addressComponents[i];
          if (
            component.types.includes("locality") ||
            component.types.includes("administrative_area_level_1")
          ) {
            locationName = component.long_name;
            break;
          }
        }
        console.log("Location Name:", locationName);
        setSelectedLocationName(locationName); // 선택된 지역 이름을 설정
        // Write 컴포넌트로 선택된 위치 전달
        onLocationSelect({
          name: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng(),
          locationName: locationName,
        });
      }
    });
  }, [isLoaded, onLocationSelect]);

  // 구글맵 로드 시 실행되는 함수
  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  // 지도 클릭 시 실행되는 함수
  const handleMapClick = (event) => {
    // 클릭한 위치 선택된 위치로 설정
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    // Write 컴포넌트로 선택된 위치 전달
    onLocationSelect({
      name: "",
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng(),
      locationName: locationName,
    });
  };

  // 검색 버튼 클릭 시 실행되는 함수
  const handleSearch = async () => {
    try {
      // 입력된 주소에 대한 데이터 가져오기
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          searchQuery
        )}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        // 검색 결과에서 위치 정보 가져와서 선택된 위치로 설정
        const location = data.results[0].geometry.location;
        setSelectedLocation({
          lat: location.lat,
          lng: location.lng,
        });
        // Write 컴포넌트로 선택된 위치 전달
        onLocationSelect({
          name: data.results[0].formatted_address,
          latitude: location.lat,
          longitude: location.lng,
          locationName: locationName,
        });
      } else {
        console.log("결과를 찾을 수 없음");
      }
    } catch (error) {
      console.error("데이터 불러오는 중 오류 발생:", error);
    }
  };

  return isLoaded ? (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          ref={autocompleteInput}
          id="autocomplete"
          placeholder="장소를 검색하세요"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.inputField}
        />
        <button onClick={handleSearch} className={styles.searchButton}>
          검색
        </button>
      </div>
      <div className={styles.tagContainer}>
        {selectedLocationName && (
          <div className={styles.tag}>{selectedLocationName}</div>
        )}
      </div>

      <GoogleMap
        mapContainerStyle={{
          width: "95%",
          height: "200px",
          borderRadius: "12px",
        }}
        center={selectedLocation || defaultCenter}
        zoom={selectedLocation ? 15 : 8}
        onLoad={handleMapLoad}
        onClick={handleMapClick}
        options={{
          mapTypeControl: false,
          mapTypeControlOptions: {
            mapTypeIds: ["roadmap"],
          },
          streetViewControl: false,
        }}
      >
        {selectedLocation && (
          <Marker
            position={{
              lat: selectedLocation.lat,
              lng: selectedLocation.lng,
            }}
          />
        )}
      </GoogleMap>
    </div>
  ) : (
    <div>{loadError ? "지도 불러오기 실패" : "지도 불러오는 중..."}</div>
  );
};

export default TravelMap;
