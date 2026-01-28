import React from 'react'

export default function ListaUsuarioComponents(props: ListaUsuario) {
  return (
      <div className="card">
      <h2 className="card-name">{props.nombre}</h2>

      <p className="card-info">
        <span>Email:</span> {props.email}
      </p>

      <p className="card-info">
        <span>Ocupación:</span> {props.ocupacion}
      </p>
    </div>
  )
}
