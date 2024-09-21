import React from "react";

const Greeting = ({ name, children }) => {
  const message = name || "World";

  return (
    <div>
      <h2>Hello {message}</h2>
      {children && <p>{children}</p>}
    </div>
  );
};

export default Greeting;
