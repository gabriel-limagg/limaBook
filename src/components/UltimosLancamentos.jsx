import {livros} from "./DadosLancamento"
import CardRecomenda from "./CardRecomenda"
function UltimosLancamentos() {
  return (
    <main>
    <section className="bg-gray-200 pb-20 flex flex-col">
    <h2 className="w-full py-8 bg-white text-yellow-500 text-3xl text-center">ÚLTIMOS LANÇAMENTOS</h2>
    {livros.map(livro => (
      <img className="w-40 m-auto mt-8 flex justify-center cursor-pointer" src={livro.src}/>
    ))}
    <CardRecomenda/></section>
  
    </main>
  )
}

export default UltimosLancamentos