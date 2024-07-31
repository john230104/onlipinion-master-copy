import "./botao_filtrar_grade.css"
import { FaArrowAltCircleUp } from "react-icons/fa";


const Botao_Filtrar_Grade = () => {
    return (
        <div className="area_botao_filtrar">
            <button type="button" className="botao-filtrar">Todos<FaArrowAltCircleUp className="icon-arrow-se-front"/></button>
        </div>
    );
};

export default Botao_Filtrar_Grade;