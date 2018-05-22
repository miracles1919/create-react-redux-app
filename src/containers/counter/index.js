import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from 'components/counter';
import {
  increment, decrement, incrementAsync, incrementOdd,
} from 'actions/counter';
import { ActionCreators as UndoActionCreators } from 'redux-undo';

const Counter = ({
  dispatch, counter,
}) => {
  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };
  const onIncrementAsync = () => {
    dispatch(incrementAsync());
  };
  const onIncrementIfOdd = () => {
    dispatch(incrementOdd());
  };
  const onUndo = () => {
    dispatch(UndoActionCreators.undo());
  };
  const onRedo = () => {
    dispatch(UndoActionCreators.redo());
  };
  return (
    <div>
      <Item
        value={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onIncrementAsync={onIncrementAsync}
        onIncrementIfOdd={onIncrementIfOdd}
        onUndo={onUndo}
        onRedo={onRedo}
      />
    </div>
  );
};

Counter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  return ({ counter: state.counter.present });
};

export default connect(mapStateToProps)(Counter);
