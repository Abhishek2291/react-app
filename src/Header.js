import React from "react";

let Header = () => {
  return <div>Header</div>;
};

let Nav = ({ name }) => {
  return <div>
    Nav {name}
    <Header  />
  </div>;
};

export { Header, Nav };
