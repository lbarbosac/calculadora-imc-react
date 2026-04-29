import { useState } from "react";
import { calcularGorduraCorporal, classificarGorduraCorporal } from "../utils/gorduraCorporal";
import { salvarGorduraCorporal } from "../services/gorduraCorporalApi";
import ResultadoGorduraCorporal from "./ResultadoGorduraCorporal";

function FormularioGorduraCorporal() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("masculino");
  const [altura, setAltura] = useState("");
  const [pescoco, setPescoco] = useState("");
  const [cintura, setCintura] = useState("");
  const [quadril, setQuadril] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const limparCampos = () => {
    setNome("");
    setAltura("");
    setPescoco("");
    setCintura("");
    setQuadril("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      const dados = {
        nome: nome.trim(),
        sexo,
        altura: Number(altura),
        pescoco: Number(pescoco),
        cintura: Number(cintura),
        quadril: sexo === "feminino" ? Number(quadril) : null
      };

      if (!dados.nome || !dados.altura || !dados.pescoco || !dados.cintura) {
        throw new Error("Preencha todos os campos obrigatórios.");
      }

      if (sexo === "feminino" && !dados.quadril) {
        throw new Error("Informe o quadril para sexo feminino.");
      }

      const percentual = calcularGorduraCorporal(dados);
      const classificacao = classificarGorduraCorporal(percentual, sexo);

      const dadosCompletos = {
        ...dados,
        percentual_gordura: percentual,
        classificacao
      };

      await salvarGorduraCorporal(dadosCompletos);
      setResultado(dadosCompletos);
      limparCampos();
    } catch (erro) {
      setErro(erro.message);
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
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="campo">
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
        </div>

        <div className="grupo-campos">
          <div className="campo">
            <label htmlFor="altura">Altura (cm)</label>
            <input
              id="altura"
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Ex: 175"
            />
          </div>

          <div className="campo">
            <label htmlFor="pescoco">Pescoço (cm)</label>
            <input
              id="pescoco"
              type="number"
              value={pescoco}
              onChange={(e) => setPescoco(e.target.value)}
              placeholder="Ex: 38"
            />
          </div>
        </div>

        <div className="grupo-campos">
          <div className="campo">
            <label htmlFor="cintura">Cintura (cm)</label>
            <input
              id="cintura"
              type="number"
              value={cintura}
              onChange={(e) => setCintura(e.target.value)}
              placeholder="Ex: 82"
            />
          </div>

          {sexo === "feminino" && (
            <div className="campo">
              <label htmlFor="quadril">Quadril (cm)</label>
              <input
                id="quadril"
                type="number"
                value={quadril}
                onChange={(e) => setQuadril(e.target.value)}
                placeholder="Ex: 96"
              />
            </div>
          )}
        </div>

        {erro && <p className="mensagem-erro">{erro}</p>}

        <button className="botao" type="submit" disabled={carregando}>
          {carregando ? "Calculando..." : "Calcular e salvar"}
        </button>
      </form>

      {resultado && <ResultadoGorduraCorporal resultado={resultado} />}
    </section>
  );
}

export default FormularioGorduraCorporal;