import React, { useState } from "react";
import Spinner from "../components/Spinner";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

import logo from "../assets/logo.png";
import font from "../root-styles/Fonts";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const centers = [
  {
    lat: 53.20548,
    lng: 23.20592,
  },
];

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `AIzaSyCG3gy4Q3ykg2QaTXfrISAXBlbBHWpB-98`,
    //!
  });

  const [map, setMap] = useState(null);
  const [show, setShow] = useState(true);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
    // console.log(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const divStyle = {
    background: `white`,
    padding: "20px",
    display: "flex",
    alignItems: "center",
    margin: "5px",
    fontFamily: font.secondFont,
  };
  const imgLogo = {
    padding: "1rem",
  };
  const linkStyle = {
    textDecoration: "none",
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centers[0]}
        position={centers[0]}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <>
          <Marker
            onLoad={onLoad}
            position={centers[0]}
            onClick={() => setShow(!show)}
            animation={window.google.maps.Animation.DROP}
          >
            {!show && (
              <InfoWindow onLoad={onLoad} position={centers[0]}>
                <div style={divStyle}>
                  <img style={imgLogo} src={logo} alt="logo" />
                  <div>
                    <p>Tu jesteśmy</p>
                    <a style={linkStyle} href="tel:573156154">
                      Tel 573 156 154
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </>
      </GoogleMap>
    </div>
  ) : (
    <>
      <Spinner />
    </>
  );
}

export default React.memo(Map);
