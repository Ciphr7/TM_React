import React from 'react'
import Map from './components/Map'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
const center = {
  lat: 39.8282,
  lng: -98.5795
};
const App = () => {

  return (
    <>
      <Header title='TruckMiles 2022' />
      <Map center={center} ></Map>

      <Footer />
    </>
  )
}

export default App




