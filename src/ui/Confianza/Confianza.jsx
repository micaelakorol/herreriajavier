import React from "react";
import "./confianza.css";
import confianzaData from "./confianzaData";

const Confianza = () => {
  return (
    <section className="confianza">
      <h4 className="title-uppercase"> - ¿Por qué elegirnos?</h4>

      <div className="confianza-card">
        <p className="confianza-text">
          {confianzaData.map((item, index) => (
            <span key={index} className="confianza-item">
              <span className="numero">{item.numero}</span>
              {item.texto} {/** FALTA AGREGAR EL CHECK */}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Confianza;
