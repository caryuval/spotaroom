import React from "react";
import PropTypes from "prop-types";

export const Spinner = ({ className }) => (
  <div className={className}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

Spinner.propTypes = {
  className: PropTypes.string
};
