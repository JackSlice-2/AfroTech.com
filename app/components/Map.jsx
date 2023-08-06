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
    { markerOffset: 25, coordinates: [-47.8825, -15.7942] },
    { markerOffset: 25, coordinates: [-51.2177, -30.0346] },
    { markerOffset: 25, coordinates: [-48.5482, -27.5945] },
    { markerOffset: 25, coordinates: [-46.6333, -23.5505] },
    { markerOffset: 25, coordinates: [-49.2827, -25.4284] }
];
  
const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [55, 14, 0],
        scale: 1000
      }}
      style={{width:"100%", height:"100%", text:"white"}}
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
        <Marker key={name} coordinates={coordinates}>
          <circle r={5} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#efeef5" }}
          >
            {name}
          </text>
        </Marker>
      ))}
      <Annotation
        subject={[-51.2177, -30.0346]}
        dx={-175}
        dy={-165}
        connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: 'round'
        }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Porto Alegre"}
        </text>
      </Annotation>
      <Annotation
        subject={[-48.5482, -27.5945]}
        dx={-215}
        dy={-149}
        connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: 'round'
        }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Florianopolis"}
        </text>
      </Annotation>
      <Annotation
        subject={[-49.2827, -25.4284]}
        dx={-227}
        dy={-135}
        connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: 'round'
        }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Curitiba"}
        </text>
      </Annotation>
      <Annotation
        subject={[-46.6333, -23.5505]}
        dx={-260}
        dy={-130}
        connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: 'round'
        }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Sao Paulo"}
        </text>
      </Annotation>
      <Annotation
        subject={[-47.8825, -15.7942]}
        dx={-260}
        dy={-20}
        connectorProps={{
            stroke: "white",
            strokeWidth: 2,
            strokeLinecap: 'round'
        }}
      >
        <text x='-8' textAnchor="end" alignmentBaseline="middle" fill="white">
            {"Brasilia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
