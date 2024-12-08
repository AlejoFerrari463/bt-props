import React from "react";


import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";



const Propiedades = ({
  id: ide,
  nombre,
  garage,
  habitaciones,
  metros2,
  imagenes,
  banos,
  planta,
  ascensor,
  tipo,
  direccion,
  precio,
  pileta
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="propiedad-card">
        <div>
          <div id={ide} className="carousel slide carousel-fade">
            <div
              className="carousel-inner"
              variant="primary"
              onClick={handleShow}
            >
              {imagenes.map((item, index) => {
                console.log(item)
                if (index == 0) {
                  return (
                    <div className="carousel-item active" key={item}>
                      <img
                        className="propiedad-imagen"
                        src={item}
                        alt={nombre}
                      />
                    </div>
                  );
                } else {
                  return (
                    <div className="carousel-item" key={item}>
                      <img
                        className="propiedad-imagen"
                        src={item}
                        alt={nombre}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#${ide}`}
              data-bs-slide="prev"
            >
              <i className="fa-solid fa-caret-left fa-2xl"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#${ide}`}
              data-bs-slide="next"
            >
              <i className="fa-solid fa-caret-right fa-2xl"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div>
          <div className="info-card mt-2">
            <h4>
              {habitaciones}
              <i className="fa-solid fa-bed ms-3"></i>{" "}
            </h4>
            <h4>
              {metros2}m2{" "}
              <i className="fa-solid fa-screwdriver-wrench ms-3"></i>
            </h4>
          </div>

          <h5 className="mt-3">{nombre}</h5>
          <h5 className="mt-4" >{direccion}</h5>
          <h4 className="mt-3">{precio}</h4>

          <div className="mt-4 mb-3" >
          <Link className="link-wpp-modal" target="_blank" to={`https://wa.me/541121659864?text=¡Hola!%20estoy%20interesado%20en%20la%20propiedad%20${nombre}%0D%0AID:%20${ide}`}>¡Contactanos por WhatsApp!</Link>
          </div>
          
        </div>

        

        <Modal size="lg" show={show} onHide={handleClose} >
          <Modal.Header className="header-modal" closeButton>
            <Modal.Title>{nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body  >
            <div id={`${ide}123`} className="carousel md slide carousel-fade">
              <div className="carousel-inner ">
                {imagenes.map((item, index) => {
                  if (index == 0) {
                    return (
                      <div className="carousel-item active" key={item}>
                        <img
                          className="carousel-imagen"
                          src={item}
                          alt={nombre}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div className="carousel-item" key={item}>
                        <img
                          className="carousel-imagen"
                          src={item}
                          alt={nombre}
                        />
                      </div>
                    );
                  }
                })}
              </div>

    
        
              
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target={`#${ide}123`}
                data-bs-slide="prev"
              >
                <i className="fa-solid fa-caret-left fa-2xl"></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target={`#${ide}123`}
                data-bs-slide="next"
              >
                <i className="fa-solid fa-caret-right fa-2xl"></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            <div>
              <div className="info-card mt-2">
                <h4>
                  Habitaciones: {habitaciones}
                </h4>
                <h4>
                  Superficie: {metros2}m2
                </h4>

                <h4 className="mt-3">
                  Baños: {banos}
                </h4>
                {garage ? <h4  className="mt-3" >Garage: si</h4> : <h4  className="mt-3" >Garage: no</h4> }

                {planta ? <h4  className="mt-3" >{planta}</h4> : <h4  className="mt-3" >-</h4>}
              
                {ascensor ? <h4  className="mt-3"  >Ascensor: si </h4> : <h4  className="mt-3">Ascensor: no</h4> }
                

              </div>

              {pileta ? <h4  className="mt-3"  >Pileta: si </h4> : <h4  className="mt-3">Pileta: no</h4> }

             
              <h5 className="mt-4">Direccion: {direccion}</h5>
              <h4 className="mt-4">{precio}</h4>

            </div>
          </Modal.Body>

          <Modal.Footer>
            <Link className="link-wpp-modal" target="_blank" to={`https://wa.me/541121659864?text=¡Hola!%20estoy%20interesado%20en%20la%20propiedad%20${nombre}%0D%0AID:%20${ide}`}>¡Contactanos por WhatsApp!</Link>
          </Modal.Footer>
    
        </Modal>
      </div>
    </>
  );
};

export default Propiedades;
