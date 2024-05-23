import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Principal from "./pages/Principal";
import Categorias from './pages/Categorias';
import Favoritos from './pages/Favoritos';
import Estante from './pages/Estante';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />
  },
  {
    path: "/categorias",
    element: <Categorias/>

  },
  {
    path: "/favoritos",
    element: <Favoritos/>
  },
  {
    path: "/estante",
    element : <Estante/>
  }
])



function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>

  )
}

export default App;
