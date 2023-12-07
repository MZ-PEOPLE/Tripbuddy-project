import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import styles from "./TravelMap.module.css";

const libraries = ["places"]; //사용 라이브러리
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

const defaultCenter = {
  lat: 37.5665,
  lng: 126.978,
};

const TravelMap = () => {
  //상태값 정의
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey, //구글API키입력
    libraries,
  });

  //Ref 사용-> DOM 요소 접근하기 위한 변수들
  const autocompleteInput = useRef(null); //자동완성 input 요소
  const mapRef = useRef(); //Google Map 요소
  const placesServiceRef = useRef(); //PlaceService를 위한 변수

  //지도 or 자동완성 로드되면 실행
  useEffect(() => {
    if (!isLoaded) return; //로드 실패시 종료

    //자동완성 기능
    const autocomplete = new window.google.maps.places.Autocomplete(
      autocompleteInput.current,
      { types: ["establishment"] }
    );

    //자동완성 결과 변경되면 실행되는 함수
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry && place.geometry.location) {
        //선택 장소 위치 상태값으로 설정
        setSelectedLocation({
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        });
      }
    });

    // 지도 불러와질때 PlacesService 초기화
    placesServiceRef.current = new window.google.maps.places.PlacesService(
      mapRef.current
    );
  }, [isLoaded]);

  //구글맵 로드될 때 실행될 함수
  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  //지도 클릭 시 실행될 함수
  const handleMapClick = (event) => {
    //클릭한 위치 선택된 위치로 설정
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  //검색 버튼 클릭 시 실행될 함수
  const handleSearch = async () => {
    try {
      //입력된 주소에 대한 데이터 가져오기
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          searchQuery
        )}&key=${apiKey}`
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        //검색 결과에서 위치정보 가져와서 선택된 위치로 설정
        const location = data.results[0].geometry.location;
        setSelectedLocation({
          lat: location.lat,
          lng: location.lng,
        });
      } else {
        console.log("결과를 찾을 수 없셈");
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

      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={selectedLocation || defaultCenter}
        zoom={selectedLocation ? 15 : 8}
        onLoad={handleMapLoad}
        onClick={handleMapClick}
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
    <div>{loadError ? "지도 불러오기 실패" : "지도 불러오기ing"}</div>
  );
};

export default TravelMap;
