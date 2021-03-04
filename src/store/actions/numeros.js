// action creator
import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from "./actionTypes";

export function alterarNumeroMinimo(valor) {
  return {
    type: NUM_MIN_ALTERADO,
    payload: valor,
  };
}

export function alterarNumeroMaximo(valor) {
  return {
    type: NUM_MAX_ALTERADO,
    payload: valor,
  };
}
