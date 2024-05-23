import Header from "../components/Header"
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";

function Principal() {
  return (
    <main>
    <div className="w-screen h-screen bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800">
      <Header/>
      <Pesquisa/>
      </div>
      <div>
        <UltimosLancamentos/>
      </div>
      </main>
    
  )
}

export default Principal