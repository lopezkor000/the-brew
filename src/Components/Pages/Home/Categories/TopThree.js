import Card from "./Card/Card";
import { getImage } from "../../../db/db";
import { useState, useEffect } from "react";

const TopThree = () => {
  const [loading, setLoading] = useState(true);
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    (async () => {
      let img = await getImage("spooky.jpg");
      let img2 = await getImage("spice-girls.jpg");
      let img3 = await getImage("tiny.jpg");
      setCoffee([img, img2, img3]);
      setLoading(false);
    })();
  }, [loading]);

  const getTopThree = () => {
    let topList = [];
    for (let i = 0; i < 3; i++) {
      topList.push(
        <Card
          key={i}
          img={`${coffee[i]}`}
          title={`title ${[i]}`}
          text={`text ${[i]}`}
          className="col"
        />
      );
    }
    return topList;
  };

  return (
    <div className="m-5">
      <h1 className="m-5">Top 3</h1>
      <div className="row d-flex justify-content-evenly">{getTopThree()}</div>
    </div>
  );
};

export default TopThree;
