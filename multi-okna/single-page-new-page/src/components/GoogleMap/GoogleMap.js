import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  Marker,
} from "@react-google-maps/api";

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
    googleMapsApiKey: "AIzaSyA1alshfkMwsP8leA9dRSxVuaplwBZigCA",
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
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <Marker
            opacity={0.7}
            onLoad={onLoad}
            position={centers[0]}
            onClick={() => setShow(!show)}
            animation={window.google.maps.Animation.DROP}
          >
            {!show && (
              <InfoWindow onLoad={onLoad} position={centers[0]}>
                <div style={divStyle}>
                  <h2>Multi Okna sp. z o.o.</h2>
                  <p>Tu jesteśmy</p>
                  <a style={linkStyle} href="tel:607473123">
                    Tel 607 473 123
                  </a>
                </div>
              </InfoWindow>
            )}
          </Marker>
        </>
      </GoogleMap>
    </div>
  ) : (
    <>
      <p>Ładoawanie mapy...</p>
      {/* todo add spiner */}
    </>
  );
}

export default React.memo(Map);
