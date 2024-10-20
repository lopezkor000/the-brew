import Card from "./Card/Card";

const Location = () => {
  return (
    <div className="m-5">
      <h1 className="m-5">The Brew Near You</h1>
      <div className="row d-flex justify-content-evenly">
        <Card img="tiny.jpg" title="Yummy Drink" text="" className="col" />
        <Card img="caram.jpg" title="Yummy Drink Number 2" text="" className="col" />
      </div>
    </div>
  );
};

export default Location;
