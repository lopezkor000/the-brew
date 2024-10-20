const Card = (props) => {
  return (
    <div
      className="card text-bg-dark"
      style={{ height: "15rem", width: "27rem" }}
    >
      <img
        src={props.img}
        className="card-img img-fluid"
        alt=""
        style={{ height: "100%" }}
      />
      <div className="card-img-overlay">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
