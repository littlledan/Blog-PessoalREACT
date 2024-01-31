import FormularioPostagem from '../formularioPostagem/FormularioPostagem';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalPostagem.css'

function ModalPostagem() {
  return (
    <>
      <Popup
      trigger={<button className='rounded bg-black text-[#ffffff] py-2 px-4'>Crie um post</button>} modal>
        <div>
          <FormularioPostagem />
        </div>
      </Popup>
    </>
  );
}

export default ModalPostagem;