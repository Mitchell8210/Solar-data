import "./App.css";
import Map from "./Map";
import solarData from "./solar-data";

function App() {
  console.log("DATA", solarData);
  const places = solarData.features;
  return (
    <div className="App">
      <div
        style={{
          backgroundImage: `url("/solar.jpg")`,
          minHeight: 800,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div style={{ fontSize: 45, textAlign: "center", paddingTop: 50 }}>
          Solar Energy Production Sites of Las Vegas
        </div>
        <div>(Data provided by City of Las Vegas)</div>
        <div>
          Created By:{" "}
          <a
            href="https://www.linkedin.com/in/mitchell-rhoads-009006195/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "blue" }}
          >
            Mitchell Rhoads
          </a>
        </div>
      </div>
      <div className="info-section">
        <Map eventData={places} />
        {places.map((place, index) => (
          <div key={index} style={{ textAlign: "left", padding: 10 }}>
            <div style={{ padding: 5 }}>
              <span className="title-span">
                <a
                  href={`https://maps.google.com/?q=${place.properties.Address___Location}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white" }}
                >
                  {place.properties.Facility_Name}
                </a>
              </span>
            </div>
            <div style={{ padding: 5 }}>
              <span className="descriptor-span">Address:</span>{" "}
              {place.properties.Address___Location}
            </div>
            <div style={{ padding: 5 }}>
              <span className="descriptor-span">
                KWH(Kilowatt-hour) Generated:
              </span>{" "}
              {place.properties.KWH_Generated} KWH
            </div>
            <div style={{ padding: 5 }}>
              <span className="descriptor-span">Rating:</span>{" "}
              {place.properties.KW_Rating} KW
            </div>
            <div style={{ padding: 5 }}>
              <span className="descriptor-span">Last Updated:</span>{" "}
              {place.properties.Date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
