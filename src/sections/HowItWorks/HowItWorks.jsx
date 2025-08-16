import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section id="how_it_works" className="how_it_works">
      <h2>HOW IT WORKS</h2>
      <div className="main-container">
        <div className="content">
          <h3>Create an account</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
          <button>START HERE</button>
        </div>
        <div className="create-account-form">
          <h4>JOIN TODAY FOR FREE!</h4>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="text" placeholder="Password" />
            <input type="text" placeholder="Confirm Password" />
            <button type="submit">DONE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
