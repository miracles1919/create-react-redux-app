import React from 'react';
import PropTypes from 'prop-types';

// cancelable counter
const Item = ({
  value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd, onUndo, onRedo,
}) => (
  <p>
    Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>{' '}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
    <button onClick={onIncrementAsync}>Increment async</button>{' '}
    <button onClick={onUndo}>undo</button>{' '}
    <button onClick={onRedo}>redo</button>
  </p>
);

Item.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
  onUndo: PropTypes.func.isRequired,
  onRedo: PropTypes.func.isRequired,
};

export default Item;
