import Card from "./Card/Card";

const DrinkOfTheMonth = () => {
  return (
    <div className="m-5">
      <h1 className="m-5">Drink of the Month</h1>
      <div className="row align-items-center w-75">
        <Card img="caram.jpg" title="Title" text="text" className="col" />
        <p className="col p-5 text-left">
          Laboris laborum enim voluptate sunt sunt dolor aliqua adipisicing esse
          esse. Irure exercitation ipsum laborum nisi ipsum est reprehenderit
          cillum ea officia. Aliquip non laboris ipsum culpa enim fugiat ut est
          exercitation minim dolore velit sint. Anim duis consectetur laborum
          quis exercitation nisi amet proident officia commodo reprehenderit.
          Cupidatat quis nisi eiusmod eu tempor ullamco reprehenderit nostrud
          ad.
        </p>
      </div>
    </div>
  );
};

export default DrinkOfTheMonth;
