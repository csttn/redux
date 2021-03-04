import React from "react";
import Card from "../Card/Card";
import { connect } from "react-redux";
import {
  alterarNumeroMaximo,
  alterarNumeroMinimo,
} from "../../store/actions/numeros";

import "./styles.css";
//buscando funções alterarMinimo e alterarMaximo que foram enviadas pelo redux, conectadas pelo segundo parametro do connect, acionando as actions retornando um objeto e enviando aos reducers para alterar o estado do redux que ira refletir nas propriedades que estao sendo enviadas ao compónente pelo metodo mapStateToProps.
function Intervalo({ min, max, alterarMinimo, alterarMaximo }) {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(valor) {
      //actions creator -> action
      const action = alterarNumeroMinimo(valor);
      dispatch(action);
    },
    alterarMaximo(valor) {
      const action = alterarNumeroMaximo(valor);
      dispatch(action);
    },
  };
}

// (mapStateToProps) mapeia o o estado redux para as propriedades do componente
// (mapDispatchToProps) mapeia a propriedades do compoennets para o estado do redux alterando o mesmo
export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
