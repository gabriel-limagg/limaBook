import React from 'react'
const textoOpcoes = ['CATEGORIAS','FAVORITAS','MINHA ESTANTE']
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