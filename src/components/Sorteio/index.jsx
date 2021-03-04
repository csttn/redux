import React from "react";

// import { Container } from './styles';
import Card from "../Card/Card";
import { connect } from "react-redux";

function Sorteio({ sortMin, sortMax }) {
  const randomNumber = () => {
    return Math.floor(Math.random() * (sortMax - sortMin + 1) + sortMin);
  };

  return (
    <Card title="Sorteio dos Números" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{randomNumber()}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    sortMin: state.numeros.min,
    sortMax: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
