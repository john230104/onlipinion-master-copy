import "./avaliacao_pt2.css";
import Botao_Ordenar from "../Botoes/BotaoOrdenarGrade/botao_ordenar_grade";
import Botao_Filtrar from "../Botoes/BotãoFiltrarGrade/botao_filtrar_grade";
import { FaStar } from "react-icons/fa";

const Avaliacao_pt2 = () => {
    return (
        <div className="avaliacao_pt2">
            <div className="titulo">AVALIAÇÃO</div>
            <div className="number2">3.0<sub>(5)</sub> &nbsp; <sup>(4 avaliações)</sup></div>
            <ul className="estrela2">
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
                <li><FaStar/></li>
            </ul>
            <div className="organizar">
                <div className="ordenar">Ordenar:</div>
                <Botao_Ordenar />
                <div className="filtrar">Filtrar:</div>
                <Botao_Filtrar />
            </div>
            
        </div>
    );
};

export default Avaliacao_pt2;