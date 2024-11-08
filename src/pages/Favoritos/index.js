import Banner from "componentes/Banner";
import styles from "./Favoritos.module.css";
import Titulo from "componentes/Titulo";
import Card from "componentes/Card";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos"></Banner>
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card
          id="2"
          titulo="Gato bonifácio"
          capa="https://thecatapi.com/api/images/get?format=src&type=png"
        />
      </section>
    </>
  );
}

export default Favoritos;
