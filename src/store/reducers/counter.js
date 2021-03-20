import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "./utility/utility";

const initialState = {
  counter: 0,
};

//HELPER FUNCTIONS

const increment = (state) =>
  updateObject(state, { counter: state.counter + 1 });
const decrement = (state) =>
  updateObject(state, { counter: state.counter - 1 });
const add = (state, action) =>
  updateObject(state, { counter: state.counter + action.val });
const subtract = (state, action) =>
  updateObject(state, { counter: state.counter - action.val });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return increment(state, action);
    case actionTypes.DECREMENT:
      return decrement(state, action);
    case actionTypes.ADD:
      return add(state, action);
    case actionTypes.SUBTRACT:
      return subtract(state, action);
  }
  return state;
};

export default reducer;
