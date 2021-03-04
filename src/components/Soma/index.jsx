import React from "react";

import Card from "../Card/Card";

import { connect } from "react-redux";

function Soma({ number1, number2 }) {
  return (
    <Card title="Soma dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{number1 + number2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    number1: state.numeros.min,
    number2: state.numeros.max,
  };
}
export default connect(mapStateToProps)(Soma);
