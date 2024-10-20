import React from "react";
import Header from "./Header/Header";
import DrinkOfTheMonth from "./Categories/DrinkOfTheMonth";
import TopThree from "./Categories/TopThree";
import Events from "./Categories/Events";
import Location from "./Categories/Location";
import { app } from "../../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const storage = getStorage(app);

  async function getImage(location) {
    const ImageURL = await getDownloadURL(ref(storage, location));
    return ImageURL;
  }

  useEffect(() => {
    const fetchData = async () => {
      const image = await getImage("logo.png");
      setData(image);
      setLoading(false);
    };
    fetchData();
    console.log(data);
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
