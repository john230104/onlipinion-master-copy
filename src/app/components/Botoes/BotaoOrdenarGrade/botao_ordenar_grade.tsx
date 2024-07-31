import "./botao_ordenar_grade.css"
import { FaArrowAltCircleUp } from "react-icons/fa";


const Botao_Ordenar_Grade = () => {
    return (
        <div className="area_botao_ordenar">
            <button type="button" className="botao-ordenar">Mais recentes<FaArrowAltCircleUp className="icon-arrow-s-front"/></button>
        </div>
    );
};

export default Botao_Ordenar_Grade;