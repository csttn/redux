import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "../actions/actionTypes";
const InitialState = {
  min: 7,
  max: 20,
};

export default function numerosReducers(state = InitialState, action) {
  switch (action.type) {
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;
  }
}
