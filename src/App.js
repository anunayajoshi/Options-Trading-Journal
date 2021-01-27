import { useState } from 'react';
import './App.css';
import FilterForm from './components/FilterForm';
import List from './components/List'
import {enable as enableDarkMode, setFetchMethod, } from 'darkreader';

// To enable dark mode
setFetchMethod(window.fetch);

enableDarkMode({
  brightness: 100,
  contrast: 100,
  sepia: 10,
});


function App() {
  //Lifting state up, in order to share data with sibling components
  const [finalData, setFinalData] = useState('');
  return (
    <div className="App">

      <FilterForm setFinalData = {setFinalData} />

      {finalData === '' ? ' ' : <List finalData= {finalData} />}
    </div>  
  );
}

export default App;
