import Opcoes from "../components/Opcoes"
import Logo from "../components/Logo"
import Icone from "../components/Icones"

function Header() {
  return (
    <header className="bg-white flex p-2 justify-center">
    <Logo/> <Opcoes/> <Icone/>
  </header>
  )
}

export default Header