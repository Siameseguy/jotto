import React from 'react';
// list prop types for this component, will throw error if any props are passed that don't match
import PropTypes from 'prop-types';

const Congrats = (props) => {
    if (props.success) {
      return (
        <div data-test="component-congrats">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      );
    } else {
      return (
        <div data-test="component-congrats" />
      );
    }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;