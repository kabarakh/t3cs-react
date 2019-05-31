import React, { useState } from "react";
import PropTypes from "prop-types";

function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  const increaseCount = function() {
    setCount(count + 1);
  };

  return (
    <React.Fragment>
      <span className="counter">{count}</span>
      <button onClick={increaseCount}>Increase Count</button>
    </React.Fragment>
  );
}

Counter.propTypes = {
  initialValue: PropTypes.number
};

Counter.defaultProps = {
  initialValue: 0
};

export default Counter;
