import React from 'react'


import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection,getDocs,query,where } from 'firebase/firestore'
import { db } from '../services/config'
import PropiedadesList from '../PropiedadesList/PropiedadesList'
import Wpp from '../Wpp/Wpp'


const PropiedadesListContainer = () => {

  const [propiedades, setPropiedades] = useState([])

  const {tipoProp} = useParams()


  useEffect(()=>{

  
    let obtenerProp = null;

    if(tipoProp=="novedad"){

      obtenerProp = tipoProp ? query(collection(db,"propiedades"), where ("novedad","==",true))  : collection(db,"propiedades")

    }
    else {

      obtenerProp = tipoProp ? query(collection(db,"propiedades"), where ("tipo","==",tipoProp))  : collection(db,"propiedades")

    }

   


    getDocs(obtenerProp)
    .then((res)=>{

        const filtrarPropiedades = res.docs.map((doc)=>{

          const info = doc.data();
          return{id: doc.id,...info}
          
       


        })

        setPropiedades(filtrarPropiedades)


    })


  },[tipoProp])


  return (
    <div className='container-fluid' >


      {tipoProp ? <h1 className='text-center mt-3' >{tipoProp.toUpperCase()}</h1> : <h1 className='text-center mt-3' >TODAS NUESTRAS PROPIEDADES</h1> }

 
      <PropiedadesList prop={propiedades} />

      <Wpp />

    </div>
  )
}

export default PropiedadesListContainer