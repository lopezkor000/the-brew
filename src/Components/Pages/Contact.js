import React from "react";
import "../CSS Files/Hero.css";
import "../CSS Files/Header.css";

const Header = () => {
  return (
    <>
        <div className="logo">
          <img src="logo.png" alt="The Brew Logo" className="logo-image" />
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/order">Order Now</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </nav>

        
    <div className="container" style={{paddingLeft: 0, paddingTop: 50, display: "flex", justifyContent: "space-evenly"}}>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8087.721268582594!2d-98.17675455467523!3d26.3021414718397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8665a23835869ff3%3A0xba81d9738ad6c541!2sGrind%20Coffee%20Co.!5e0!3m2!1sen!2sus!4v1729406280068!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
        </div> 
        <div style={{paddingLeft: 20}}>
                <h1 style={{textAlign: "center", paddingBottom: 20}}>
                    Contact Us
                </h1>
                <div>
                    We’d love to hear from you! At The Brew, your feedback and inquiries are always welcome. Whether you have a question about our menu, want to share your experience, or are interested in hosting an event, our friendly team is here to help. You can reach us by phone at <a href="tel:956-123-4567">956-123-4567</a>, or drop us an email at <a href="mailto:example@somewhere.com">thebrewest@wholebeans.com</a>
                    . Don’t forget to follow us on social media for the latest updates, special promotions, and events! If you’re in the neighborhood, stop by and say hello—our doors are always open, and we can’t wait to serve you your next favorite cup of coffee!
                </div>
                <br></br>
                <ul style={{float: "left", width: 10, listStyle: "none"}}>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>
                <ul style={{float: "right", width: 500, listStyle: "none"}}>
                    <li>7am - 8pm</li>
                    <li>7am - 8pm</li>
                    <li>7am - 8pm</li>
                    <li>7am - 8pm</li>
                    <li>9am - 8pm</li>
                    <li>9am - 8pm</li>
                </ul>

            </div>
    </div>
           
<br></br>
<br></br>
<br></br>
<br></br>
    </>
  );
};

export default Header;