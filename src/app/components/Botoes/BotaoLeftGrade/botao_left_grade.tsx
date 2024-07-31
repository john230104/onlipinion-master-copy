import "./botao_left_grade.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";


const Botao_Left = () => {
    return (
        <div className="area_botao_left">
            <button type="button" className="botao-left"><FaArrowAltCircleLeft className="icon-arrow-se-left"/></button>
        </div>
    );
};

export default Botao_Left;