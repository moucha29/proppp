import './App.css';
import React from 'react';
import FullName from './profile/component/FullName';
import Profession from './profile/component/Profession';
import Bio from './profile/component/Bio';
import Photo from './profile/component/NOUR.jpg';

function App() {
  let msg = "HELLO IT'S ME"
   const alertMe=()=> {
     alert(msg)
   }

  return (
    <div className="App">
      <div >
<FullName FullName="ZAIED NOUR" alertMe={alertMe}>
  <div className='imag'>
<img src= {Photo} alt="prof"/>
</div>
</FullName> 
      </div>
      <div>
<Bio Bio="bio"
     Date="26/02/1995 in Bizerte"
     Adress="7 Rue du Canada, Jardin de Carthage"
     Mobile="+21658148641"
     Mail="Zaiednour7@gmail.com"
     Train="Hello, my name is ZAIED Nour and I am writing to introduce myself. My interests include coding, art, and music .
     In the past i used to work at a geomatic company, after that I choose to study web development Because most businesses require a full-stack Web developer for a variety of reasons. Web developers who are full-stack can work with a variety of technologies ,so I made some research on Gomycode . 
     and finally I started practicing to code in Gomycode with HTML,CSS Basics and developed my simple portfolio as one my beginners project containing my basic personal details ."
     ></Bio>  
      </div>
      <div>
<Profession Profession="Profession"
Experrience1="from Juin 2022 to October 2022 i worked as Geomatic senior technician in LUXCARTA ."
Experrience2="from january 2021 to November 2021 i worked as a technico-commercial in IRONHOSTER ."
Experrience3="from February 2020 to september 2020 i had an internship in a petoleum company (ETAP)."


></Profession>
      </div>
    </div>
  );
}



export default App;