import React, { useEffect } from 'react'
import { useState } from 'react';
import { getLivros } from '../serviços/Livros';

function Input() {
  const [ livrosPesquisados, setLivrosPesquisados ] = useState([])
  const [livros, setlivros]  =  useState([])
 
  useEffect(()=>{
    fetchLivros()
  }, [])

async function fetchLivros(){
  const livrosdaApi = await getLivros()
   setlivros(livrosdaApi)
}

  return (
    
    <div className=''>
     <input 
  placeholder='escreva sua proxima leitura' 
  className='border border-white bg-transparent rounded-full w-64 text-white p-5 mb-5 placeholder-white text-lg' 
  type="text"
  onKeyDown={evento => {
    if (evento.key === 'Enter') {
      const textoDigitado = evento.target.value.trim();
      if (textoDigitado){
      const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
      setLivrosPesquisados(resultadoPesquisa);
    }}
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