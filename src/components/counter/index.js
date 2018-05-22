import React from 'react';
import PropTypes from 'prop-types';


const Item = ({
  value, onIncrement, onIncrementAsync, onDecrement, onIncrementIfOdd,
}) => (
  <p>
    Clicked: {value} times <button onClick={onIncrement}>+</button> <button onClick={onDecrement}>-</button>{' '}
    <button onClick={onIncrementIfOdd}>Increment if odd</button>{' '}
    <button onClick={onIncrementAsync}>Increment async</button>
  </p>
);

Item.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
  onIncrementIfOdd: PropTypes.func.isRequired,
};

export default Item;
