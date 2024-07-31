import Logo from "../../../../src/assets/img/Logo.png";
import Image from "next/image";
import "./navbar.css"
import BarraPesquisa from "../BarraPesquisa/BarraPesquisa";
import BotaoLogin from "../Botoes/BotaoLogin/BotaoLogin";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> <Image src="/assets/img/Logo.png" alt="Logo" width="40" height="40" /> </div>
      <div className="navbar-onlipinion">ONLIPINION</div>
      <div className="navbar-categorias">CATEGORIAS</div>
      <div className="navbar-recomendacoes">RECOMENDAÇÕES</div>
      <div className="navbar-sobre">SOBRE</div>
      <div className="navbar-contato">CONTATO</div>
      <BotaoLogin></BotaoLogin>
      <BarraPesquisa></BarraPesquisa>
    </nav>
  );
};

export default Navbar;