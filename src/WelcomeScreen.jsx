import React from "react";
import './WelcomeScreen.css';

  function WelcomeScreen(props)
  {
    return props.showWelcomeScreen ?
      (
        <div className="WelcomeScreen" >
          <h1>
            welcome to the meet app</h1>
          <h4>
            Log in to see events around the world for full stack developers
          </h4>
          <div className="button_cont" align="center">
            <div className="google-btn">
              <img
                class="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
            </div>
            <button onClick={() => {props.getAccessToken()}}
            rel="nofollow noopener"
            class="btn-txt">
            <b>Sign in with Google</b>
            </button>
          </div>
       
        <a href="https://mmendell.github.io/chat2/privacy.html"
        rel="nofollow noopener"
        >
        Privacy policy
        </a>
      </div>
        )
        :
        null
}

export default WelcomeScreen;