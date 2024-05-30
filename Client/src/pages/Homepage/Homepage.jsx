import React, { useState } from "react";
import "./Homepage.css";
import Header from "/src/Header/Header";
import CategoryCoins from "../../Category-coins/CategoryCoins";
import Nav from "../../nav/Nav";

const Homepage = () => {
  return (
    <div className="wrapper">
      <Nav/>
       <h1>Homepage</h1>
      <Header/>     
      <CategoryCoins />
    </div>
  );
};

export default Homepage;
