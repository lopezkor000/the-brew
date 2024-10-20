import Card from "./Card/Card";

const Location = () => {
  return (
    <div className="m-5">
      <h1 className="m-5">The Brew Near You</h1>
      <div className="row d-flex justify-content-evenly">
        <Card img="logo.png" title="Title" text="text" className="col" />
        <Card img="logo.png" title="Title" text="text" className="col" />
      </div>
    </div>
  );
};

export default Location;
