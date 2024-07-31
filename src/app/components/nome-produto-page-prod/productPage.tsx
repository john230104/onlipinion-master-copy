// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Texto_produto from "./nome-produto";

// const ProductPage = ({ produtoId }) => {
//     const [product, setProduct] = useState<Product | null>(null);
  
//     useEffect(() => {
//       axios.get<Product>(`http://localhost:3001/products/${productId}`)
//         .then((response) => {
//           setProduct(response.data);
//         })
//         .catch((error) => {
//           console.error('Erro ao buscar detalhes do produto:', error);
//         });
//     }, [produtoId]);
  
//     if (!product) {
//       return <div>Carregando...</div>;
//     }
  
//     return (
//       <div>
//         <Texto_produto nome={product.name} />
//       </div>
//     );
//   };