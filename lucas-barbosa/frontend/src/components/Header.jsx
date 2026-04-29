import { Link, useLocation } from "react-router-dom";

function Header({ titulo, texto }) {
  const location = useLocation();

  return (
    <header className="cabecalho">
      <div className="cabecalho__conteudo">
        <h1 className="cabecalho__titulo">{titulo || "Calculadora de IMC"}</h1>
        <p className="cabecalho__texto">
          {texto || "Informe seus dados, veja o resultado e salve o histórico no banco de dados."}
        </p>

        <nav className="menu">
          <Link className={location.pathname === "/" ? "menu__item menu__item--ativo" : "menu__item"} to="/">
            Calcular IMC
          </Link>
          <Link
            className={location.pathname === "/gordura-corporal" ? "menu__item menu__item--ativo" : "menu__item"}
            to="/gordura-corporal"
          >
            Calcular Gordura Corporal
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;