import React from 'react'
import livro2 from "../../src/imagens/livro2.png"

function CardRecomenda() {
  return (
    <section className='m-10 flex items-center bg-white shadow-md rounded-lg mx-auto max-w-xl px-20 py-25 justify-around w-full'>
    <div >
    <h3 className='text-left text-base text-yellow-500'>Talvez você se interesse por...</h3>
    <h4 className='text-blue-900 text-xl font-bold my-4'>angula 11</h4>
    <p className='max-w-32'>construindo uma aplicação integrada com a plataforma google</p>
    </div>
    <div className='m-2'>
    <img src={livro2} alt="w-150" />
    <button className=' m-2  bg-orange-500 text-white py-2 px-4 rounded font-bold text-lg w-32 hover:cursor-pointer'>saiba mais</button>
    </div>
    </section>

  )
}

export default CardRecomenda