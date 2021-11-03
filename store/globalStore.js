import alunoReducer from "./reducers/aluno.js";
import aulasReducer from "./reducers/aulas.js";

const reducers = Redux.combineReducers({ alunoReducer, aulasReducer });
export const store = Redux.createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
