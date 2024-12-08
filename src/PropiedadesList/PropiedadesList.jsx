import React from 'react'
import Propiedades from '../Propiedades/Propiedades'


const PropiedadesList = ({prop}) => {
  return (

    <>

    
      <div className='contenedor-props' >

        {

            prop.map((item)=>{


              
                return <Propiedades  key={item.id} {...item} />

            })


        }


      </div>

     

    </>

    
  )
}

export default PropiedadesList