import React from "react";
import styles from "./Contato.module.css";
import foto from "./contato.jpg";
import Head from "../Head/Head";

const Contato = () => {
  return (
    <section className={styles.contato + " animeLeft"}>
      <Head title="Ranek | Contato " description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>marcos_fmendes@hotmail.com</li>
          <li>(81) 99833-7386</li>
          <li>Recife, PE</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
