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
  height: "100%",
};

const HemAutomotiveMap = () => {
  const handleMapClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
      window.open(mapsUrl, "_blank");
    }
  };

  return (
    <div className="h-[600px] w-96 mb-20" onClick={handleMapClick}>
      <APIProvider
        apiKey={getGoogleMapsApiKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          mapContainerStyle={containerStyle}
          defaultCenter={center}
          zoom={16}
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

export default HemAutomotiveMap;
