import "./botao_back.css"
import { FaArrowAltCircleDown } from "react-icons/fa";


const Botao_Back = () => {
    return (
        <div className="area_botao_back">
            <button type="button" className="botao-back"><FaArrowAltCircleDown className="icon-arrow-se-back"/></button>
        </div>
    );
};

export default Botao_Back;