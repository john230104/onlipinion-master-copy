import Image from "next/image";
import "./page.css";
import NavBar from "../components/NavBar/NavBar";
import Imagens from "../components/corpo-part1/corpo-part1";
import Texto from "../components/nome-produto-page-prod/nome-produto";
import BotaoAvaliacao from "../components/Botoes/BotaoAvaliacoes/BotaoAvaliacoes";
import BotaoDescricao from "../components/Botoes/BotaoDescricao/botaodesc";
import BotaoInformacao from "../components/Botoes/BotaoInformacao/botaoinfo";
import Avaliacao from "../components/Avaliacao/avaliacao";
import Avaliacao_pt2 from "../components/Avaliacao_pt2/avaliacao_pt2";
import Grade from "../components/Grade_Opi/grade";
import Descricao_Prod from "../components/DescricaoProduto/descricao_prod";
import InformacoesTecProd from "../components/InfoTecnica/info_tec_prod";

export default function Home() {
  return (
    <div className="tela-geral">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      <div className="primeira-tela">
        <div className="imagens">
          <Imagens />
        </div>
        <div className="info_prod">
          <Texto />
          <div className="buttons-1-tela">
            <BotaoDescricao />
            <BotaoInformacao />
            <BotaoAvaliacao />
          </div>
          <Avaliacao />
        </div>
      </div>
      <div className="tela-descricao">
        <Descricao_Prod />
      </div>
      <div className="tela-info-tecnicas">
        <InformacoesTecProd />
      </div>
      <div className="ultima-tela">
        <Avaliacao_pt2 />
        <Grade />
      </div>
      
    </div>
  );
}
