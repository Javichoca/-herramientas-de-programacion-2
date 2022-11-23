import ComponenteActualizarAutor from "./autores/ComponenteActualizarAutor";
import ComponenteListaAutor from "./autores/ComponenteListaAutor";
import ComponenteRegistrarAutor from "./autores/ComponenteRegistrarAutor";
import ComponenteActualizarLibro from "./libros/ComponenteActualizarLibro";
import ComponenteListaLibro from "./libros/ComponenteListaLibro";
import ComponenteRegistrarLibro from "./libros/ComponenteRegistrarLibro";
import ComponentePrincipal from "./principal/ComponentePrincipal";
import ComponenteRedireccionar from "./principal/ComponenteRedireccionar";

const rutas=[
{path:'/',componente:ComponentePrincipal},
{path:'/autores/registrar',componente:ComponenteRegistrarAutor},
{path:'/autores/actualizar/:id',componente:ComponenteActualizarAutor},
{path:'/autores',componente:ComponenteListaAutor},
{path:'/libros/registrar',componente:ComponenteRegistrarLibro},
{path:'/libros/actualizar/:id',componente:ComponenteActualizarLibro},
{path:'/libros',componente:ComponenteListaLibro},

// creando un path para rutas no encontradas, esto siempre va al final
{path:'*',componente:ComponenteRedireccionar}
];

export default rutas;