import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from 'components/counter';

const Counter = ({
  dispatch, counter,
}) => {
  const onIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const onDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const onIncrementAsync = () => {
    dispatch(dispatch => {
      setTimeout(() => {
        dispatch({ type: 'INCREMENT' });
      }, 1000);
    });
  };
  const onIncrementIfOdd = () => {
    dispatch({ type: 'INCREMENT_IF_ODD' });
  };
  console.log('counter', counter);
  return (
    <div>
      <Item
        value={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onIncrementAsync={onIncrementAsync}
        onIncrementIfOdd={onIncrementIfOdd}
      />
    </div>
  );
};

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  // onIncrementIfOdd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ counter: state.counter });

export default connect(mapStateToProps)(Counter);
