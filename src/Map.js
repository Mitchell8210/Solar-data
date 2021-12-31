import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ center, zoom, eventData }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  console.log("location INFO", locationInfo);

  const markers = eventData.map((ev, index) => {
    const address = ev?.properties.Address___Location;
    const coords = address?.split("(")[1];

    if (coords) {
      const lat = coords.split(",")[0];
      const lng = coords.split(",")[1].replace(")", "");
      const handleClick = () => {
        console.log("HELLO", ev.properties);
        setLocationInfo(ev.properties);
      };
      return (
        <LocationMarker
          key={index + "marker"}
          lat={lat}
          lng={lng}
          handleClick={handleClick}
        />
      );
    }
  });
  console.log("MARKERS", markers);
  const filteredMarkers = markers.filter((m) => m !== undefined);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyDWdFfnn7_VXX8NxW_oN0hFTGgmlN5rEJ4",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {filteredMarkers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 36.1699,
    lng: -115.1398,
  },
  zoom: 10,
};

export default Map;
