import React from "react";
import Header from "./Header/Header";
import DrinkOfTheMonth from "./Categories/DrinkOfTheMonth";
import TopThree from "./Categories/TopThree";
import Events from "./Categories/Events";
import Location from "./Categories/Location";

const Home = () => {
  return (
    <>
      <Header />
      <DrinkOfTheMonth />
      <TopThree />
      <Events />
      <Location />
    </>
  );
};

export default Home;