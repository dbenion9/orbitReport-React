import React, { useState } from 'react';
import satData from './components/satData';
import Buttons from './components/Buttons';
import Table from './components/Table';
import Banner from './components/Banner';

function App() {
  const [sat, setSat] = useState(satData);

  
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

 
  const filterByType = (currentType) => {
    const filteredSats = satData.filter(
      (newSatDisplay) => newSatDisplay.orbitType === currentType
    );
    setSat(filteredSats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} displaySats={displaySats} setSat={setSat} />
      <Table sat={sat} />
    </div>
  );
}

export default App;