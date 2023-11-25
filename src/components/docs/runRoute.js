import React, { useState } from 'react';

const RunRoute = () => {
  const [origin, setOrigin] = useState('77611');
  const [destination, setDestination] = useState('88001');
  const [distance, setDistance] = useState(null);

  const getDistance = async () => {
    try {
      const response = await fetch(
        `https://prime.promiles.com/quickdist/GetDistance.aspx?origin=${origin}&destination=${destination}&username=ProMiles&password=m2i08lP8&companycode=PRM&format=text&distancein=miles`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.text();
      setDistance(data);
    } catch (error) {
      console.error('Error fetching distance:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  return (
    <div className="text-3 text-white p-2 text-center font-bold bg-red-600">
      <label >
        Origin:
        <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />
      </label>

      <label >
        Destination:
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
     

      <button  onClick={getDistance}>Get Distance</button>

      {distance !== null && <p>Distance: {distance} miles</p>} </label>
    </div>
  );
};

export default RunRoute;