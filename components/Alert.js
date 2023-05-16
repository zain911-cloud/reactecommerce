import React from 'react';

const Alert = ({ message, type }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

Alert.success = (message) => {
  return <Alert message={message} type="success" />;
};

Alert.error = (message) => {
  return <Alert message={message} type="danger" />;
};

export default Alert;
