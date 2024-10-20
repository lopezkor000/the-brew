import Card from "./Card/Card";
import { getImage } from "../../../db/db";
import { useState, useEffect } from "react";

const Location = () => {
  const [loading, setLoading] = useState(true);
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    (async () => {
      let img = await getImage("tiny.jpg");
      let img2 = await getImage("spice-girls.jpg");
      setCoffee([img, img2]);
      setLoading(false);
    })();
  }, [loading]);

  return (
    <div className="m-5">
      <h1 className="m-5">The Brew Near You</h1>
      <div className="row d-flex justify-content-evenly">
        <Card img={coffee[0]} title="Title" text="text" className="col" />
        <Card img={coffee[1]} title="Title" text="text" className="col" />
      </div>
    </div>
  );
};

export default Location;
