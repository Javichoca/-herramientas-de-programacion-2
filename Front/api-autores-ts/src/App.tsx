import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComponenteMenu from './menu/ComponenteMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ComponenteListaAutor from './autores/ComponenteListaAutor';
import ComponenteListaLibro from './libros/ComponenteListaLibro';
import ComponentePrincipal from './principal/ComponentePrincipal';
import rutas from './route-config';

// este es el componente App
function App() {
  return (
    <div className='container'>


      {/* son las rutas del menu principal */}
      <BrowserRouter>
      {/* este es el menu principal */}
      <ComponenteMenu/>
      <Routes>
              {/* <Route path="/" element={<ComponentePrincipal/>} />
      <Route path="/autores" element={<ComponenteListaAutor/>} />
      <Route path="/libros" element={<ComponenteListaLibro />} /> */}
      {
      rutas.map(ruta => 
      <Route key={ruta.path} path={ruta.path} element={<ruta.componente/>}/>)
      }
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;