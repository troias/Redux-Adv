export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (val) => {
  return {
    type: ADD,
    val: val,
  };
};

export const subtract = (val) => {
  return {
    type: SUBTRACT,
    val: val,
  };
};

export const save_result = (result) => {
  return {
    type: STORE_RESULT,
    result: result,
  };
};

export const store_result = (result) => {
  return (dispatch) => {
    setTimeout(() => {
        dispatch(save_result(result))
    }, 2000);
  };
};

export const delete_result = (id) => {
  return {
    type: DELETE_RESULT,
    resElId: id,
  };
};
