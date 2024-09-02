import musicImg from '../assets/music0.png';
import usRandom from '../assets/usRand1.png';

function Navbar() {
  return (
    <>
      <div className="contenedor1">
        <div className="contenedor2">
          {/* <img src={menuBlanco} className="menuOp" alt="Menu de opciones" /> */}
          <img src={musicImg} className="logoMusic" alt="Logo Music" />
          <input
            type="text"
            className="search-bar"
            placeholder="🔍 Buscar..."
          />
        </div>

        <img className="userFoto" src={usRandom} alt="foto de usuario" />
      </div>
    </>
  );
}

export default Navbar;
