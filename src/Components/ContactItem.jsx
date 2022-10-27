import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/Contact";

export const ContactItem = ({ props }) => {
  return (
    <>
      <h1>Contacto</h1>
      <h2>
        Nombre y apellido:
        <span>
          {props.nombre}
          {props.apellido}
        </span>
      </h2>
      <h3>{props.email}</h3>
      {props.conectado ? "Conectado" : "No disponible"}
    </>
  );
};

ContactItem.propTypes = {
  props: PropTypes.instanceOf(Contact)
};
