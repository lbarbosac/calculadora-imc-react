import Header from "../components/Header";
import FormularioIMC from "../components/FormularioIMC";

function Home() {
  return (
    <main className="pagina-principal">
      <Header />
      <section className="conteudo-principal">
        <FormularioIMC />
      </section>
    </main>
  );
}

export default Home;