import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/solar-compass";
const LocationMarker = ({ handleClick }) => {
  return (
    <div className="location-marker" onClick={handleClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default LocationMarker;
