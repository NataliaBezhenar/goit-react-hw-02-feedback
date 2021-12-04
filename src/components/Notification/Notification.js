import React from "react";
import { PropTypes } from "prop-types";

const Notification = ({ msg }) => <h2>{msg}</h2>;

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
export default Notification;
