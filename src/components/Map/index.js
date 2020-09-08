import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMap = withScriptjs(
  withGoogleMap(({ isMarkerShown, latitude, longitude }) => (
    <>
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{
          lat: parseInt(latitude),
          lng: parseInt(longitude),
        }}
      >
        {isMarkerShown && (
          <Marker
            position={{
              lat: parseInt(latitude),
              lng: parseInt(longitude),
            }}
          />
        )}
      </GoogleMap>
    </>
  ))
);

export default MyMap;
