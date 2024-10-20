import Card from "./Card/Card";

const TopThree = () => {
  const getTopThree = () => {
    let topList = [];
    for (let i = 0; i < 3; i++) {
      topList.push(
        <Card
          img="logo.png"
          title={`Title ${i}`}
          text={`text ${i}`}
          className="col mx-5"
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
