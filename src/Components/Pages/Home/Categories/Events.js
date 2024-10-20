import Card from "./Card/Card";
import { getImage } from "../../../db/db";
import { useState, useEffect } from "react";

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [coffee, setCoffee] = useState([]);

  useEffect(() => {
    (async () => {
      let img = await getImage("cina.jpg");
      let img2 = await getImage("espresso.jpg");
      let img3 = await getImage("frap.jpg");
      setCoffee([img, img2, img3]);
      setLoading(false);
    })();
  }, [loading]);

  const getEvents = () => {
    let topList = [];
    for (let i = 0; i < 3; i++) {
      topList.push(
        <Card
          key={i}
          img={`${coffee[i]}`}
          title={`Title ${i}`}
          text={`text ${i}`}
          className="col"
        />
      );
    }
    return topList;
  };

  return (
    <div className="m-5">
      <h1 className="m-5">Events</h1>
      <div className="row d-flex justify-content-evenly">{getEvents()}</div>
    </div>
  );
};

export default Events;
