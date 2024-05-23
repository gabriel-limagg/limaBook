import logo from "../../src/imagens/logo.svg"

function Logo() {
  return (
   <div className='flex text-4xl m-6 p-0 ml-1'>
    <img src={logo} className="mr-2.5 " alt="" />
    <p><strong>LIMA</strong> books</p>
</div>
  )
}

export default Logo
     