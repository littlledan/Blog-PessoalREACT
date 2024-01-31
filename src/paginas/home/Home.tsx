import homeLogo from '../../assets/geek.jpg'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';



function Home() {
    return (
        <>
        <div className="bg-gradient-to-t from-[#000000] via-[#4B0082] to-[#4B0082] flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Hi, Geekers!</h2>
              <p className='text-xl text-center'>Compartilhe suas ideias, recomendações, entre em debates sobre tudo da cultura geek e se divirta!</p>
  
                <div className="flex justify-around gap-4">
                <ModalPostagem />
                <button className='rounded bg-black text-[#ffffff] py-2 px-4'>Posts</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3 rounded-full' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;