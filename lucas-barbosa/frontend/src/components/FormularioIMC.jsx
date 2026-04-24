import { useState } from "react";
import { calcularIMC, classificarIMC } from "../utils/imc";
import { salvarIMC } from "../services/api";
import ResultadoIMC from "./ResultadoIMC";

function FormularioIMC() {
  const [nome, setNome] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensagemErro, setMensagemErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const limparCampos = () => {
    setNome("");
    setPeso("");
    setAltura("");
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    setMensagemErro("");
    setCarregando(true);

    try {
      const pesoNumero = Number(peso);
      const alturaNumero = Number(altura);

      if (!nome.trim() || pesoNumero <= 0 || alturaNumero <= 0) {
        throw new Error("Preencha os campos corretamente.");
      }

      const imc = calcularIMC(pesoNumero, alturaNumero);
      const classificacao = classificarIMC(imc);

      const dadosIMC = {
        nome: nome.trim(),
        peso: pesoNumero,
        altura: alturaNumero,
        imc,
        classificacao
      };

      await salvarIMC(dadosIMC);
      setResultado(dadosIMC);
      limparCampos();
    } catch (erro) {
      setMensagemErro(erro.message || "Erro ao calcular ou salvar o IMC.");
    } finally {
      setCarregando(false);
    }
  };

  return (
    <section className="cartao">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="grupo-campos">
          <div className="campo">
            <label htmlFor="peso">Peso (kg)</label>
            <input
              id="peso"
              type="number"
              step="0.01"
              min="0"
              placeholder="Ex: 72.5"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className="campo">
            <label htmlFor="altura">Altura (m)</label>
            <input
              id="altura"
              type="number"
              step="0.01"
              min="0"
              placeholder="Ex: 1.75"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
        </div>

        {mensagemErro && <p className="mensagem-erro">{mensagemErro}</p>}

        <button className="botao" type="submit" disabled={carregando}>
          {carregando ? "Calculando..." : "Calcular e salvar"}
        </button>
      </form>

      {resultado && <ResultadoIMC resultado={resultado} />}
    </section>
  );
}

export default FormularioIMC;