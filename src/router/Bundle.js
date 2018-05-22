import React from 'react';
import PropTypes from 'prop-types';

export default class Bundle extends React.Component {
  componentWillMount () {
    this.load(this.props);
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }
    load = (props) => {
      this.setState({
        mod: null,
      });
      props.load().then((mod) => {
        console.log('mod', mod);
        this.setState({
          mod: mod.default ? mod.default : mod,
        });
      });
    }
    render () {
      const { mod } = this.state;
      return mod ? this.props.children(this.state.mod) : null;
    }
}

Bundle.propTypes = {
  children: PropTypes.func,
  load: PropTypes.func,
};
