import React from "react";
import "./nome-produto.css";

interface TextoProdutoProps {
    nome: string;
}

// const Texto_produto: React.FC<TextoProdutoProps> = ({ name }) => {
//     return (
//         <div className="nome-produto">
//             {/* {name} */}
//             <div>Processador Intel Core i5-10400F, 2.9GHz (4.3GHz Max Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA 1200 -BX8070110400F</div>
            
//         </div>
//     );
// };

const Texto_produto = () => {
    return (
        <div className="nome-produto">
            {/* {name} */}
            <div>Processador Intel Core i5-10400F, 2.9GHz (4.3GHz Max Turbo), Cache 12MB, 6 Núcleos, 12 Threads, LGA 1200 -BX8070110400F</div>
            
        </div>
    );
};

export default Texto_produto;