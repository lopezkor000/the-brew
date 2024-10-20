import React from "react";
import Header from "./Header/Header";
import DrinkOfTheMonth from "./Categories/DrinkOfTheMonth";
import TopThree from "./Categories/TopThree";
import Events from "./Categories/Events";
import Location from "./Categories/Location";
import { useState, useEffect } from "react";
import { getImage } from "../../db/db";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const image = await getImage("logo.png");
      setData(image);
      setLoading(false);
    };
    fetchData();
  }, [loading]);

  return (
    <>
      <Header img={data} />
      <DrinkOfTheMonth />
      <TopThree />
      <Events />
      <Location />
    </>
  );
};

export default Home;
