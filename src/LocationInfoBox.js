import React from "react";

const LocationInfoBox = ({ info }) => {
  const address = info?.Address___Location?.split("(")[0];
  return (
    <div className="location-info">
      <div className="info-title">Location Details</div>
      <div className="line-item">
        ID: <strong>{info.FID}</strong>
      </div>
      <div className="line-item">
        Facility Name: <strong>{info.Facility_Name}</strong>
      </div>
      <div className="line-item">
        KWH Generated: <strong>{info.KWH_Generated}</strong>
      </div>
      <div className="line-item">
        KW Rating: <strong>{info.KW_Rating}</strong>
      </div>
      <div className="line-item">
        Last Updated: <strong>{info.Date}</strong>
      </div>
      <div className="line-item">
        Address:{" "}
        <strong>
          {address}{" "}
          <a
            className="marker-link"
            href={`https://maps.google.com/?q=${info.Address___Location}`}
            target="_blank"
            rel="noreferrer"
          >
            View in Maps
          </a>
        </strong>
      </div>
    </div>
  );
};

export default LocationInfoBox;
