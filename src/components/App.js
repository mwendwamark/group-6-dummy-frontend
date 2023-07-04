import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        {/* <div className="social">
          <div className="go">
            <p className="icon-text">Google</p>

            <FontAwesomeIcon icon={faGoogle} className="fa-icon" />
          </div>
          <div className="fb">
            <p className="icon-text"> Facebook</p>
            <FontAwesomeIcon icon={faFacebook} className="fa-icon" />
          </div>
        </div> */}
      </form>
    </>
  );
}

export default App;
