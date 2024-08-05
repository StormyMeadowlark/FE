
import { AdvancedMarker, APIProvider, Map, Pin} from "@vis.gl/react-google-maps";
import { getGoogleMapsApiKey } from "../../../utils/getGoogleMapsApiKey";

const containerStyle = {
  width: "",
  height: "600px",
};

const center = {
  lat: 39.008354,
  lng: -95.685265,
};



const HemAutomotiveMap = () => {
  return (
    <div className="h-[600px] mb-20">
      <APIProvider
        apiKey= {getGoogleMapsApiKey()}
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