
import { useState, useEffect } from "react";
import { AdvancedMarker, APIProvider, Map, Pin} from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "",
  height: "600px",
};

const center = {
  lat: 39.008354,
  lng: -95.685265,
};

const HemAutomotiveMap = () => {
  
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


  return (
    <div className="h-[600px] mb-20">
      <APIProvider
        apiKey={apiKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          mapContainerStyle={containerStyle}
          defaultCenter={center}
          zoom={15}
          mapId="d6551b7d5be865d0"
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


export default HemAutomotiveMap