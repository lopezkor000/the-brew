function Footer() {
  return (
    <div
      className="d-flex justify-content-evenly text-white w-100 py-2"
      style={{ backgroundColor: "#332219", height: "8rem" }}
    >
      <img src="The_Brew_Logo.png" alt="" />
      <div>
        <div className="col">
          <a
            href="/"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Menu
          </a>
          <a
            href="/"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Location
          </a>
        </div>
      </div>
      <div>
        <div className="col">
          <a
            href="/"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Social Media
          </a>
          <a
            href="https://www.instagram.com"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Facebook
          </a>
        </div>
      </div>
      <div>
        <div className="col">
          <a
            href="/"
            className="row link-underline link-underline-opacity-0 text-white"
          >
            Contact Us
          </a>
          <p href="/" className="row my-0">
            the.brew@email.com
          </p>
          <p href="/" className="row my-0">
            +1 956-123-4567
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
