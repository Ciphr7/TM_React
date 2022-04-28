import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '70vh'

};

function MyMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (

    <GoogleMap
      mapContainerStyle={containerStyle}

      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      { /* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>


  ) : <></>
}

export default React.memo(MyMap)