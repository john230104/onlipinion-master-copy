import { FaShareAlt, FaHeart, FaStar } from "react-icons/fa";
import "./grade.css"
import BotaoUtil from "../Botoes/BotaoUtil/botaoutil";
import Botao_Left from "../Botoes/BotaoLeftGrade/botao_left_grade";
import Botao_Right from "../Botoes/BotaoRightGrade/botao_right";
import Botao_Back from "../Botoes/BotaoBack/botao_back";

const Grade = () => {
    return (
        <div className="geral">
            <div className="grade">
                <div className="grade01">
                    <div className="corpo_grade">
                        <div className="botao-util-css">
                            <h3>Joao Victor</h3>
                            <BotaoUtil />
                        </div>
                        <ul className="estrela-grade">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <h4>Avaliado em 06/05/2024</h4>
                        <h3 className="nome-produto-grade">Porta de entrada para Setup Gamer</h3>
                        <p className="opiniao">Inter Core i5-10400 é a porta de início para um Setup Gamer. Se você está saindo de um i3 de geração
                            mais antiga, a mudança para i5 vai ser muito boa, isso dependendo da geração do processador. 
                            Pesquise qual o melhor processador para você e seu setup antes de comprar.</p>
                    </div>
                    <div className="corpo_grade">
                        <div className="botao-util-css">
                            <h3>Lucas Agostinho</h3>
                            <BotaoUtil />
                        </div>
                        <ul className="estrela-grade">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <h4>Avaliado em 09/05/2024</h4>
                        <h3 className="nome-produto-grade">Upgrade</h3>
                        <p className="opiniao">Dispensa comentários, tanto o processador como ssd sao tops. Funcionando tudo normal.</p></div>
                </div>
                <div className="grade02">
                    <div className="corpo_grade">
                        <div className="botao-util-css">
                            <h3>Lucas Gabriel</h3>
                            <BotaoUtil />
                        </div>
                        <ul className="estrela-grade">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <h4>Avaliado em 15/06/2024</h4>
                        <h3 className="nome-produto-grade">Ótimo processador</h3>
                        <p className="opiniao">Ele veio muito ameaçado a caixa a transportadora demorou para achar, mais deu seu jeito, mais
                         o produto está impecável, funcionando perfeitamente, a loja está de parabéns, suporte rápido e muito confiável 10/10</p>
                    </div>
                    <div className="corpo_grade">
                        <div className="botao-util-css">
                            <h3>Ricardo Alves</h3>
                            <BotaoUtil />
                        </div>
                        <ul className="estrela-grade">
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                            <li><FaStar /></li>
                        </ul>
                        <h4>Avaliado em 20/07/2024</h4>
                        <h3 className="nome-produto-grade">Ótimo custo-beneficio</h3>
                        <p className="opiniao">Produto muito bom, processador perfeito para quem joga competitivo, nenhum jogo abaixo dos 180fps</p>
                    </div>
                </div>
            </div>
            <div className="campo-ico">
                <Botao_Left />
                <Botao_Back />
                <Botao_Right />
                
            </div>
            <div className="numeracao_opiniao">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>.</li>
                        <li>.</li>
                        <li>.</li>
                    </ul>
                </div>

        </div>
    );
};

export default Grade;