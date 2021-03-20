import * as actionTypes from './actionTypes';

//SYNC

const save_result = (result) => {
    // const updatedResult = result * 2
    return {
      type: actionTypes.STORE_RESULT,
      result: result,
    };
  };
  


  //ASYNC

  export const store_result = (result) => {
    return (dispatch, getState) => {
      setTimeout(() => {
          const oldCounter = getState().ctr.counter
          const res = result + oldCounter
          console.log(res)
          dispatch(save_result(result))
      }, 2000);
    };
  };
  
  export const delete_result = (id) => {
    return {
      type: actionTypes.DELETE_RESULT,
      resultElId: id,
    };
  };
  