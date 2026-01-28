'use client';
import { useState, useEffect } from "react";
import ListaUsuarioComponents from "./Components/ListaUsuarioComponents";

export default function Home() {
  const [listaUsuario2, setListaUsuarios2] = useState<Array<ListaUsuario>>([]);
  useEffect(() => {
    const datosIniciales = [
      { id: 1, nombre: "Juan Palomena", email: "juanPM@email.com", ocupacion: "Desarrollador" },
      { id: 2, nombre: "Marjorie Garcia", email: "marjGa@email.com", ocupacion: "Diseñadora" },
      { id: 3, nombre: "Pedro Picapiedra", email: "pedropp@email.com", ocupacion: "Analista" },
      { id: 4, nombre: "Anais Watterson", email: "anaisWTTS@email.com", ocupacion: "Gerente" },
      { id: 5, nombre: "Luis Mendoza", email: "luis@email.com", ocupacion: "Ingeniero" },
    ];
    
    setListaUsuarios2(datosIniciales);
  }, []);

return (
  <main style={{ backgroundColor: "#FFFDCE" }} className="main-container">
    <div className="main-header">
      <h1>Usuarios Registrados</h1>
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
