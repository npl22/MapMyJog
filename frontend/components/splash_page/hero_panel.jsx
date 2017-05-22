import React from 'react';
import { Link } from 'react-router-dom';

const HeroPanel = () => (
  <section id="homepage-hero">
      <div className="hero-img-content">
            <h1>Make Every Mile Count,</h1>
            <h1>join free today</h1>
          <p>
              You pound the pavement, we provide the motivation. Plan each stride and <br />learn from every route with MapMyRun.
          </p>
          <div id="signup">
              <Link to="/signup" className="button" id="home-sign-up-btn">
                  Sign Up
              </Link>
          </div>
          <div className="login-prompt">
              Already a member? <Link className="button" id="home-login-btn" to="/login">Log in</Link>
              <span className="terms-of-service">
                <p>
                    By joining MapMyJog, you agree to the&nbsp;
                    <a href="#">Terms &amp; Conditions</a>
                     &nbsp;and&nbsp;
                    <a href="#">Privacy Policy</a>
                </p>
              </span>
          </div>
      </div>
  </section>
);

export default HeroPanel;
