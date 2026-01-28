'use client';
import Image from "next/image";
import { use, useState } from "react";
import ListaUsuarioComponents from "./Components/ListaUsuarioComponents";

export default function Home() {


 const [listaUsuario2, setListaUsuarios2] = useState<Array<ListaUsuario>>([
    { id: 1, nombre: "María García", email: "margar@example.com", ocupacion: "Desarrolladora Frontend"},
    { id: 2, nombre: "Carlos Rodríguez", email: "carrrr@example.com", ocupacion: "Diseñador UX/UI" },
    { id: 3, nombre: "Ana Martínez", email: "martinin@example.es", ocupacion: "Product Manager" },
    { id: 4, nombre: "Luis Fernández", email: "fendin@example.com", ocupacion: "Ingeniero de Software"},
    { id: 5, nombre: "Elena Sánchez", email: "cabezona@example.com", ocupacion: "Desarrolladora Backend" }
  ]);
 


  
  return (
    <main style={{ backgroundColor: "#FFFDCE" }} className="main-container">
      <div className="main-header">
        <h1>Usuarios Registrados</h1>
import HookUseState from "./Components/HookUseState";
        <p>Listado de perfiles disponibles</p>
      </div>
      <div className="card-grid">
          {
            listaUsuario2.map((usuario) => (
              <ListaUsuarioComponents
                key={usuario.id}
                id={usuario.id}
                nombre={usuario.nombre}
                email={usuario.email}
                ocupacion={usuario.ocupacion}
              />
            ))
          }
      </div>
    </main>
  );
}
