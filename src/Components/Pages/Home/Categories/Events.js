import Card from "./Card/Card";

const Events = () => {
  const getEvents = () => {
    let topList = [];
    for (let i = 0; i < 3; i++) {
      topList.push(
        <>
          <Card
            img="logo.png"
            title={`Title ${i}`}
            text={`text ${i}`}
            className="col"
          />
        </>
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
