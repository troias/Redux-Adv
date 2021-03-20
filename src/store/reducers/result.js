import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../reducers/utility/utility";

const initialState = {
  results: [],
};

// Helper functions

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter(
    (result) => result.id !== action.resultElId
  );
  return updateObject(state, { results: updatedArray });
};

const storeResults = (state, action) => {
  const results = state.results.concat({
    id: new Date(),
    value: action.result,
  });
  return updateObject(state, { results: results });
};

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResults(state, action);
    case actionTypes.DELETE_RESULT:
      return deleteResult(state, action);
  }
  return state;
};

export default reducer;
