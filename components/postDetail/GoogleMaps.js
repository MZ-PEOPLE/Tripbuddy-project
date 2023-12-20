import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useRef, useState } from "react";

export default function GoogleMaps({ location }) {
  const mapRef = useRef();
  const libraries = ["places"];
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  console.log(location);

  const defaultCenter = {
    lat: location.lat || 37.5665,
    lng: location.lng || 126.978,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries,
  });
  console.log(isLoaded);

  const handleMapLoad = (map) => {
    mapRef.current = map;
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "230px",
            borderRadius: "12px",
          }}
          center={defaultCenter}
          zoom={null ? 15 : 8}
          onLoad={handleMapLoad}
          options={{
            gestureHandling: "greedy",
            mapTypeControl: false,
            mapTypeControlOptions: {
              mapTypeIds: ["roadmap"],
            },
            streetViewControl: false,
          }}
        >
          <Marker
            position={{
              lat: defaultCenter.lat,
              lng: defaultCenter.lng,
            }}
          />
        </GoogleMap>
      ) : null}
    </>
  );
}
