import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const infoUczenn=[{
  imie: "Janusz",
  nazwisko: "Chmura",
  klasa: "4TET",
  semestr: "2",
  data_ur: "27.11.2000",
  srednia: "4.32",
}]

function App() {
  return (
    <div className='Main'>
      <div className='NavBar'>
        <h1>Info Uczeń</h1>
      </div>

      <div className='Window'>
        <div className='UczenWindow'>
          
          <div className='imgUczen'>
            <img src='/img/uczen1.jpg' width='400px' height='300px'></img>
          </div>

          <div className='opisUczen'>
            <h3><i>Imię:</i> Janusz</h3>
            <h3><i>Nazwisko:</i> Chmura</h3>
            <h3><i>Klasa:</i> 4TET</h3>
            <h3><i>Semestr:</i> 2</h3>
            <h3><i>Data ur.:</i> 27.11.2000</h3>
            <h3><i>Średnia:</i>  4.32</h3>
          </div>

          <div className='ocenyUczen'>
            <h1>Oceny:</h1>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
