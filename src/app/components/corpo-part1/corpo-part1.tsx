import "./corpo-part1.css"
import Image from "next/image";

const Imagens = () => {
  return (
    <div className="area-total">
      <div className="imagens-prod">
          <Image src="/assets/img/imagem01.jpg" alt="imagem01" className="imagem1" width="400" height="400" />
          <Image src="/assets/img/imagem02.jpg" alt="imagem02" className="imagem1" width="50" height="50" />
          <Image src="/assets/img/imagem03.jpg" alt="imagem03" className="imagem1" width="50" height="50" />
          <Image src="/assets/img/imagem04.jpg" alt="imagem04" className="imagem1" width="50" height="50" />
      </div>
      <div className="area-imagem-maior">
      <Image src="/assets/img/imagem01.jpg" alt="imagem01" className="maior" width="400" height="400" />
      </div>
    </div>
  );
};

export default Imagens;