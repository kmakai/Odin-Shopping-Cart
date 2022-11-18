import React from "react";
import { Link } from "react-router-dom";
import shopper from "../components/Assets/shopper.webp";

function Home() {
  return (
    <div className="home">
      <div className="welcome-card">
        <div id="title">
          <h1>Welcome To AYN</h1>
          <p>A place for all your needs</p>
        </div>
        <p className="para-checkout">
          Check out our selections in the comfort of your home.
        </p>

        <Link to="/shop">
          <button>SHOP NOW</button>
        </Link>
      </div>
      <img src={shopper}></img>
    </div>
  );
}

export default Home;
