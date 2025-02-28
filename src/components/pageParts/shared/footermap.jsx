import { useState, useEffect } from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
} from "@vis.gl/react-google-maps";
import { getGoogleMapsApiKey } from "../../../utils/getGoogleMapsApiKey";

const center = {
  lat: 39.008354,
  lng: -95.685265,
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

const HemAutomotiveFooterMap = () => {
  const [apiKey, setApiKey] = useState(null); // State to store the API key

  useEffect(() => {
    const fetchApiKey = async () => {
      const key = await getGoogleMapsApiKey(); // Fetch the API key
      setApiKey(key);
    };

    fetchApiKey();
  }, []);

  const handleMapClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
      window.open(mapsUrl, "_blank");
    }
  };

  if (!apiKey) return <div>Loading map...</div>; // Show loading message while the API key is being fetched

  return (
    <div className="h-[300px] w-[100%] md:w-[75%] " onClick={handleMapClick}>
      <APIProvider
        apiKey={apiKey} // Use the fetched API key
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
