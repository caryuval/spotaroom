import React from "react";
import PropTypes from "prop-types";

export const Alert = ({ msg, type, className }) => (
  <div className={`alert alert-${type} ${className}`} role="alert">
    {msg}
  </div>
);

export const ALERT_TYPES = {
  warning: "warning",
  primary: "primary",
  secondary: "secondary",
  success: "success",
  danger: "danger",
  info: "info",
  light: "light",
  dark: "dark"
};

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(ALERT_TYPES)).isRequired,
  msg: PropTypes.string.isRequired,
  className: PropTypes.string
};
