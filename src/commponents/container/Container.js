import React from "react";
import NavBar from "../NavBar.js";

const Container = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Container;
