import React from "react";

export const Navigation = (props) => {
  return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              Pensa Reg
            </a>{" "}
          </div>

          <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
          >
            {/* Menu de navegação no lado direito */}
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                  Ferramentas
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contato
                </a>
              </li>
              {/* Botões no final do lado direito */}
              <li>
                <a href="/login" className="btn btn-sm" style={{
                  padding: "6px 15px",
                  backgroundColor: "#ec8a01",
                  color: "#fff",
                  fontWeight: "600",
                  margin: "8px 4px",
                  borderRadius: "20px"
                }}>
                  Entrar
                </a>
              </li>
              <li>
                <a href="/registro" className="btn btn-sm" style={{
                  padding: "6px 15px",
                  backgroundColor: "#ec8a01",
                  color: "#fff",
                  fontWeight: "600",
                  margin: "8px 4px",
                  borderRadius: "20px"
                }}>
                  Registrar-se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};