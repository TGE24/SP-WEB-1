import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MyMap = withScriptjs(
  withGoogleMap(({ isMarkerShown, latitude, longitude }) => (
    <>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: 9.082, lng: 8.6753 }}>
        {isMarkerShown && (
          <Marker position={{ lat: latitude, lng: longitude }} />
        )}
      </GoogleMap>
    </>
  ))
);

export default MyMap;
