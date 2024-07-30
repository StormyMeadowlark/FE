import { useState, useEffect } from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";

const center = {
  lat: 39.008354,
  lng: -95.685265,
};

const containerStyle = {
  width: "33%",
  height: "300px",
};

const HemAutomotiveFooterMap = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    console.log(apiKey);
    // Fetch the API key from the backend
    fetch("/api/v1/key/footer-map")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new TypeError("Expected JSON but received " + contentType);
        }
        return response.json();
      })
      .then((data) => setApiKey(data.apiKey))
      .catch((error) => console.error("Error fetching API key:", error));
      
  }, []);

  const handleMapClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
      window.open(mapsUrl, "_blank");
    }
  };

  return (
    <div className="h-[300px] w-[33%] mb-20" onClick={handleMapClick}>
      
        <APIProvider
          apiKey={apiKey}
          onLoad={() => console.log("Maps API has loaded.")}
        >
          <Map
            mapContainerStyle={containerStyle}
            defaultCenter={center}
            zoom={15}
            mapId="c7d06b808a89af12"
            zoomControl={false}
            scaleControl={false}
          >
            <AdvancedMarker key="HEM Automotive" position={center}>
              <Pin
                background={"#00FF00"}
                glyphColor={"#333333"}
                borderColor={"#333333"}
              />
            </AdvancedMarker>
          </Map>
        </APIProvider>
    </div>
  );
};

export default HemAutomotiveFooterMap;
