import React from "react";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://gist.githubusercontent.com/ruliana/1ccaaab05ea113b0dff3b22be3b4d637/raw/196c0332d38cb935cfca227d28f7cecfa70b412e/br-states.json";

const markers = [
  { markerOffset: 25, coordinates: [-47.8825, -15.7942], name: "Brasilia" },
  { markerOffset: 25, coordinates: [-51.2177, -30.0346], name: "Porto Alegre" },
  { markerOffset: 25, coordinates: [-48.5482, -27.5945], name: "Florianopolis" },
  { markerOffset: 25, coordinates: [-46.6333, -23.5505], name: "Sao Paulo" },
  { markerOffset: 25, coordinates: [-49.2827, -25.4284], name: "Curitiba" }
];

const Map: React.FC = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [55, 14, 0],
        scale: 1000
      }}
      style={{ width: "100%", height: "100%", color: "white" }}
    >
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#040470"
              stroke="#979797"
            />
          ))
        }
      </Geographies>
      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as [number, number]}>
        </Marker>
      ))}
      {markers.map(({ name, coordinates, markerOffset }) => (
         <Annotation
         key={name}
         subject={[coordinates[0], coordinates[1]]}
         dx={-260}
         dy={name === "Brasilia" ? -20 : -130}
         connectorProps={{
           stroke: "white",
           strokeWidth: 2,
           strokeLinecap: "round"
         }}
       >
          <text
            x="-8"
            textAnchor="end"
            alignmentBaseline="middle"
            fill="white"
          >
            {name}
          </text>
        </Annotation>
      ))}
    </ComposableMap>
  );
};

export default Map;
