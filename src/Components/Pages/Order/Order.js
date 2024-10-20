const Order = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1
        className="align-self-start"
        style={{ padding: "0px 10rem 0px 10rem" }}
      >
        Customize Order
      </h1>
      <div
        className="d-flex justify-content-evenly w-75"
        style={{ backgroundColor: "#E6E6E6", borderRadius: "5px" }}
      >
        <div>
          <img className="" src="cina.jpg" alt=""></img>
          <h2>Order Total: $xx.xx</h2>
        </div>
        <div className="d-flex flex-column">
          <div className="h2">Item Name</div>
          <div></div>
          <div className="btn">Continue to Checkout</div>
          <div className="btn">Add to Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Order;
