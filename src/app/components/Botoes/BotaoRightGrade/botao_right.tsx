import "./botao_right.css"
import { FaArrowAltCircleRight } from "react-icons/fa";


const Botao_Right = () => {
    return (
        <div className="area_botao_right">
            <button type="button" className="botao-right"><FaArrowAltCircleRight className="icon-arrow-se-right"/></button>
        </div>
    );
};

export default Botao_Right;