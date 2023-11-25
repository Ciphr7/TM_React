import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Header from './components/Header';
// import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menul from './components/Menul';


const containerStyle = {
  width: '100vw',
  height: '80vh'
};

const center = {
  lat: 39.8282,
  lng: -98.5795
};

function App() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY= 'AIzaSyD0TSo9wlHN_Psu3chFZVYoSQS5rvz9Pog'
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
    
    <Router>

    <Header title="TruckMiles 2024" />
    
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
     
       <Menul></Menul>
     
      
     
      </Router>
      </>
  ) : <></>
}

export default React.memo(App)




