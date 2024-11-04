import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Rodape from "componentes/Rodape";
import Titulo from "componentes/Titulo";
function Inicio() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Banner imagem="home"></Banner>
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes!</h1>
      </Titulo>
      <Rodape />
    </>
  );
}

export default Inicio;
