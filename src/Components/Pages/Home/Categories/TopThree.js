import Card from "./Card/Card";

const TopThree = () => {
  const getTopThree = () => {
    let topList = [];
    const coffees = ["mochi", "spice-girls", "spooky"];
    for (let i = 0; i < 3; i++) {
      topList.push(
        <>
          <Card
            img={`${coffees[i]}.jpg`}
            title={`${coffees[i]}`}
            text={`${coffees[i]}`}
            className="col"
          />
        </>
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
