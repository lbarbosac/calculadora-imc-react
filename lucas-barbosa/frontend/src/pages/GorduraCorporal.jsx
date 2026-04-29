import Header from "../components/Header";
import FormularioGorduraCorporal from "../components/FormularioGorduraCorporal";

function GorduraCorporal() {
  return (
    <main className="pagina-principal">
      <Header titulo="Calculadora de Gordura Corporal" texto="Informe suas medidas e veja o percentual estimado." />
      <section className="conteudo-principal">
        <FormularioGorduraCorporal />
      </section>
    </main>
  );
}

export default GorduraCorporal;