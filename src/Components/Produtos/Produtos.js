import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Head from "../Head/Head";
import styles from "./Produtos.module.css";

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((res) => res.json())
      .then((json) => setProdutos(json));
  }, []);
  console.log(produtos);

  if (produtos === null) return null;
  return (
    <section className={styles.produtos + " animeLeft"}>
      <Head title="Marcos Store" description="Produtos" />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img alt={produto.fotos[0].titulo} src={produto.fotos[0].src} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
};

export default Produtos;
