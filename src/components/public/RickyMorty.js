import React from 'react'
import { useState, useEffect } from 'react';
import APIService from '../../services/APIService';

export const Rickymorty = () => {
 
    const [perso, setPerso] = useState([]);

    useEffect (() => {
     
      APIService
      .then((data) => setPerso(data.results))
      .catch((error) => console.log(error))
  
    }, [perso] )
  
    const Perso = {
  
    };
    const PersoList = perso.map((g)=> <Perso p= {g} key={g.id} />);
    return (
      <div>
        <PersoList/>
      </div>
    )
}
