import React, { useState,useEffect } from 'react'
import APIService from '../../services/APIService';



export const Hijo = () => {
    
    const [perso, setPerso] = useState([]);

    useEffect(() => {
       APIService.traerPerso()
        .then((data) => setPerso(data.results))
        .catch((error) => console.log(error))
    
      }, [perso] )

      const persoList =  perso.map((e)=> {return`Nombre : ${e.name}    -    Id: ${e.id}   |  `});
    
    return (
      <div>
        {persoList}
      </div>
    )
}


