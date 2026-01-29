import React from "react";
import "./confianza.css";
import confianzaData from "./confianzaData";

const Confianza = () => {
  return (
    <section className="confianza">
      <h3 className="confianza-title">¿Por qué elegirnos?</h3>

      <div className="confianza-card">
        <p className="confianza-text">
          {confianzaData.map((item, index) => (
            <span key={index} className="confianza-item">
              <span className="check">✔</span>
              {item}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Confianza;
