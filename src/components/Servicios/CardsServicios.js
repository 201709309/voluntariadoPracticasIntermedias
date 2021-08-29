import React, { Component } from "react";
import CardServicio from "./CardServicio";
import "./CardsServicios.css";

import ventaneria from "./../../resources/images/Ventaneria.png";
import pintura from "./../../resources/images//Pintura.png";
import instalacion_piso from "./../../resources/images/instalacion_piso.png";
import impermeabilizacion from "./../../resources/images/Impermeabilizacion.png";
import tabiques from "./../../resources/images/TabiqueYeso.png";
import cieloFalso from "./../../resources/images/CieloFalso.png";

export default class CardsServicios extends Component {
  render() {
    return (
      <div className="body_servicios">
        <div className="titulo_servicios">
          <h3>Ofrecemos los siguientes Servicios:</h3>
        </div>

        <div className="wrapper">
          <CardServicio
            title="Instalación de Piso"
            src={instalacion_piso}
            urlAutor="https://www.flaticon.es/"
            titleImg="Pause08"
          />
          <CardServicio
            title="Impermeabilización"
            src={impermeabilizacion}
            urlAutor="https://www.flaticon.es/autores/smashicons"
            titleImg="Smashicons"
          />
          <CardServicio
            title="Servicio de Pintura"
            src={pintura}
            urlAutor="https://www.flaticon.es/autores/smashicons"
            titleImg="Smashicons"
          />
          <CardServicio
            title="Ventaneria"
            src={ventaneria}
            urlAutor="https://www.flaticon.es/"
            titleImg="srip"
          />
          <CardServicio
            title="Tabiques de Tabla Yeso"
            src={tabiques}
            urlAutor="https://www.flaticon.com/authors/smashicons"
            titleImg="Smashicons"
          />
          <CardServicio
            title="Cielo Falso"
            src={cieloFalso}
            urlAutor="https://www.freepik.com"
            titleImg="Freepik"
          />
        </div>
      </div>
    );
  }
}
