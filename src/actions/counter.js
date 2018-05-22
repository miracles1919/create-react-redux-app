// Action types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD';

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC';
export const CANCEL_INCREMENT_ASYNC = 'CANCEL_INCREMENT_ASYNC';

export const COUNTDOWN_TERMINATED = 'COUNTDOWN_TERMINATED';


// Action func
export function increment () {
  return { type: INCREMENT };
}

export function decrement () {
  return { type: DECREMENT };
}

export function incrementAsync () {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

export function incrementOdd () {
  return { type: INCREMENT_IF_ODD };
}
