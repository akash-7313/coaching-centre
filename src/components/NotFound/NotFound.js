import React from "react";

const NotFound = () => {
  return (
    <div className="text-center py-5 my-5">
      <i className="fas fa-exclamation-circle fa-2x text-warning"></i>
      <h1>404</h1>
      <h4> Page not found</h4>
      <p>Invalid url !!!</p>
    </div>
  );
};

export default NotFound;
