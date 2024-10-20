import Card from "./Card/Card";

const DrinkOfTheMonth = () => {
  return (
    <div className="m-5">
      <h1 className="m-5">Drink of the Month</h1>
      <div className="row align-items-center w-75">
        <Card img="caram.jpg" title="Drink of the Month" text="" className="col" />
        <p className="col p-5 text-left">
        Introducing our Drink of the Month: the Spiced Maple Latte! This seasonal delight blends rich espresso with steamed milk, infused with warm spices like cinnamon and nutmeg, and a touch of pure maple syrup for natural sweetness. Topped with a sprinkle of cinnamon and a drizzle of maple glaze, this cozy drink is perfect for crisp autumn mornings or cozy afternoons. Whether you’re looking for a comforting pick-me-up or a festive treat, the Spiced Maple Latte is sure to warm your heart and elevate your day. Stop by The Brew to savor this limited-time offering and embrace the flavors of fall!
        </p>
      </div>
    </div>
  );
};

export default DrinkOfTheMonth;
