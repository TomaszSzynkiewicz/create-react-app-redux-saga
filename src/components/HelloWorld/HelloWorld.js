import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { exampleActionRequested } from '../../actions';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.exampleAction = props.exampleAction.bind(this);
  }
  componentDidMount() {
    this.props.exampleAction();
  }

  render() {
    const {
      loading,
      message,
      error
    } = this.props;
    return (
      <div>
        {loading && <p>Loading...</p>}
        {message.length > 0 && <h1>{message}</h1>}
        {error.length > 0 && <div><p>{error}</p><button onClick={this.exampleAction}>Try again</button></div>}
      </div>
    );
  }
}

HelloWorld.propTypes = {
  exampleAction: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired
};

export default connect(
  state => ({
    loading: state.example.loading,
    message: state.example.message,
    error: state.example.error
  }),
  dispatch => ({
    exampleAction: () => dispatch(exampleActionRequested())
  })
)(HelloWorld);
