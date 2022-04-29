import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, } from '@react-google-maps/api';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
const containerStyle = {
  width: '100vw',
  height: '70vh'
};

const center = {
  lat: 39.8282,
  lng: -98.5795
};

function App() {
  const { isLoaded } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  
  const [map, setMap] = React.useState(null)
  const onLoad = React.useCallback(function callback(map) {
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <>
    <Header title="TruckMiles 2022" />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      <Footer />
      </>
  ) : <></>
}

export default React.memo(App)




