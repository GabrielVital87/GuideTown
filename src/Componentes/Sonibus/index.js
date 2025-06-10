import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Sonibus() {
  const totalAssentos = 40;
  const [assentoSelecionado, setAssentoSelecionado] = useState(null);

  const assentos = Array.from({ length: totalAssentos }, (_, i) => i + 1);

  const handleSelecionar = (numero) => {
    setAssentoSelecionado(numero);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Escolha seu assento</h2>

      <div className="d-flex flex-wrap justify-content-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
        {assentos.map((numero) => (
          <button
            key={numero}
            className={`btn m-2 ${assentoSelecionado === numero ? 'btn-success' : 'btn-outline-secondary'}`}
            style={{ width: "60px", height: "60px", fontWeight: "bold" }}
            onClick={() => handleSelecionar(numero)}
          >
            {numero}
          </button>
        ))}
      </div>

      <div className="text-center mt-4">
        {assentoSelecionado ? (
          <h5 className="text-success">Assento selecionado: {assentoSelecionado}</h5>
        ) : (
          <h5 className="text-muted">Nenhum assento selecionado</h5>
        )}
        <button
          className="btn btn-primary mt-3"
          disabled={!assentoSelecionado}
          onClick={() => alert(`Compra finalizada no assento ${assentoSelecionado}!`)}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Sonibus;
