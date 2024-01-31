import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import homeLogo from '../../assets/geek.jpg'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full bg-gradient-to-b from-[#000000] via-[#4B0082] to-[#4B0082] text-white flex justify-center py-4' style={{ fontFamily: "Josefin Sans, sans-serif" }}>
          <div className="container flex justify-between text-lg">
            <div className='flex gap-1'>
              <img src={homeLogo} alt="" className='w-10 h-10 rounded-full'/>
              <Link to='/home' className='text-4xl font-bold '   style={{ fontFamily: "Honk, sans-serif" }}>Geek News</Link>
            </div>
            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline'>Postagens</Link>
              <Link to='/temas' className='hover:underline'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar