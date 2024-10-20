import React from "react";
import "../CSS Files/Hero.css";
import "../CSS Files/Header.css";

const Header = () => {
  return (
    <>
        <div className="logo">
          <a href="/"><img src="logo.png" alt="The Brew Logo" className="logo-image" /></a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/menu">Order Now</a>
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
        <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{width: 700, height: 620, display: "inline-block"}}>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="5000">
            <img src="https://img1.wsimg.com/isteam/ip/43790f3a-7f5f-45bb-b139-b421418844f5/k-archive-b196071d02ed31683548beb658153382836.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280" class="d-block" alt="..." style={{borderRadius: 25, width: 700, height: 600}}></img>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src="https://coffeebusiness.com/wp-content/uploads/2019/08/14tenents-pt2.jpg" class="d-block " alt="..." style={{borderRadius: 25, width: 700, height: 600}}></img>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src="https://blog.clover.com/wp-content/uploads/2023/05/barista-making-a-latte-with-cafe-equipment.jpg" class="d-block" alt="..." style={{borderRadius: 25, width: 700, height: 600}}></img>
            </div>
            <div class="carousel-item" data-bs-interval="5000">
            <img src="https://dailycoffeenews.com/wp-content/uploads/2018/10/coffee-801781_1280.jpg" class="d-block" alt="..." style={{borderRadius: 25, width: 700, height: 600}}></img>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
            
        </div> 
        <div style={{paddingLeft: 20}}>
                <h1 style={{textAlign: "center", paddingBottom: 20}}>
                    About Us
                </h1>
                <div>
                    Welcome to The Brew, your cozy neighborhood coffee shop where passion for coffee meets a commitment to community. Our journey began with a simple love for high-quality, ethically sourced beans, and a desire to create a warm, inviting space for everyone. At The Brew, we carefully craft each cup with expert precision, ensuring that every sip is a delightful experience. Beyond our handcrafted beverages, we pride ourselves on fostering connections—whether it's through lively conversations, local art displays, or community events. Join us in celebrating the joy of coffee and camaraderie, where every visit feels like coming home.
                </div>
                <br></br>
                <div>
                    At The Brew, we believe that coffee is more than just a beverage—it's a catalyst for connection and creativity. Our team is passionate about curating a diverse menu that caters to every palate, from rich espressos to refreshing cold brews, and delectable pastries made from local ingredients. We strive to create an inclusive environment where everyone feels welcome, whether you're here to catch up with friends, get some work done, or simply enjoy a moment of tranquility. With our commitment to sustainability and community support, we’re not just serving coffee; we’re brewing a better tomorrow, one cup at a time. Come in, sip back, and let the good vibes flow!
                </div>
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