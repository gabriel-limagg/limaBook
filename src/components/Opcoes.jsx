import React from 'react'
import { Link } from 'react-router-dom'
const textoOpcoes = [ <Link to="/categorias"> CATEGORIAS </Link >, <Link to= "/favoritos">FAVORITAS</Link> , <Link to = "/estante"> MINHA ESTANTE</Link>]
function opcoes() {
  return (
    <ul className='flex'>
    { textoOpcoes.map( (texto) => (
        <li className="  flex  justify-center  items-center  text-xl m-7 cursor-pointer"><p>{texto}</p></li>
        ))}
  </ul>
  )
}

export default opcoes