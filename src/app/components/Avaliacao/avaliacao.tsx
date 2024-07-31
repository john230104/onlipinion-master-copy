import "./avaliacao.css";
import { FaShareAlt, FaHeart, FaStar } from "react-icons/fa";

const Avaliacao = () => {
    return (
        <div className="avaliacao">
            <div className="avalia">AVALIAÇÃO</div>
            <div className="number">3.0<sub>(5)</sub> &nbsp; <sup>(10 avaliação)</sup></div>
            <div className="estrela">
                <div className="estrela_li"><FaStar/></div>
                <div className="estrela_li"><FaStar/></div>
                <div className="estrela_li"><FaStar/></div>
                <div className="estrela_li"><FaStar/></div>
                <div className="estrela_li"><FaStar/></div>
            </div>
            <div className="social_icons">
                <li><FaShareAlt /></li>
                <li><FaHeart/></li>
            </div>
        </div>
    );
};

export default Avaliacao;