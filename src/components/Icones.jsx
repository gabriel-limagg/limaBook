import React from 'react'
import perfil from "../imagens/perfil.svg"
import sacola from "../imagens/sacola.svg"
const icones =  [perfil, sacola]
function Icones() {
  return (
    <ul className="flex items-center">
    {icones.map((icone)=>(
      <li className="mr-12 w-8"><img src={icone} alt="" /></li>
    ))}
  </ul>
  )
}

export default Icones