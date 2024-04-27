import React from 'react'
import {livros} from "./DadosPesqusa"
import { useState } from 'react';

function Input() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
 

  return (
    
    <div className=''>
      <input placeholder='escreva sua proxima leitura' className=' border border-white bg-transparent rounded-full w-64  text-white text-lg p-5 mb-5 placeholder-white text-lg' type="text"
    onBlur={evento => {
      const textoDigitado = evento.target.value
      const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado) )
      setLivrosPesquisados(resultadoPesquisa)
}}
      />
       { livrosPesquisados.map( livro => (
                <div className='w-screen flex justify-center items-center mb-5 cursor-pointer hover:border hover:border-white"'>
                    <p className='w-48'>{livro.nome}</p>
                    <img className='w-48' src={livro.src}/>
                </div>
            ) ) }
     
   
    </div>
  )
}

export default Input