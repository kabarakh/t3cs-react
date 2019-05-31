import React from "react";
import PropTypes from "prop-types";

function RedirectButton(props) {
  const redirectToExternalPage = function() {
    window.location.href = props.targetUrl;
  };

  return (
    <button type="button" onClick={redirectToExternalPage}>
      {props.children}
    </button>
  );
}

RedirectButton.propTypes = {
  targetUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default RedirectButton;
