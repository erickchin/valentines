import "./App.css";
import React, { useState } from "react";
import Music from "./Music";

function App() {
  const [hideButton, setHideButton] = useState(false);
  const [hideAll, setHideAll] = useState(false);

  const noButtonHandler = () => {
    setHideButton(true);
  };

  const yesButtonHandler = () => {
    setHideAll(true);
  };

  return (
    <div>
      {!hideAll && (
        <div className="App">
          <header className="App-header">
            <p>Hello widdle baby</p>
            <img
              src={process.env.PUBLIC_URL + "/penguin.png"}
              className="App-logo"
            />
            <div className="spacing"></div>
            <p>Will you be my Valentines?</p>
            <div className="center">
              <button onClick={() => yesButtonHandler()} className="yes">
                Yes
              </button>
              {!hideButton && (
                <button onClick={() => noButtonHandler()} className="no">
                  No
                </button>
              )}
            </div>
            <img
              src={process.env.PUBLIC_URL + "/dog.jpg"}
              className="animation"
            />
          </header>
        </div>
      )}
      {hideAll && (
        <div>
          <h1 className="center">Wuv u</h1>
          <br />
          <div className="center">
            <img
              className="animation-final"
              src={process.env.PUBLIC_URL + "/dogkiss.jpg"}
            />
          </div>
          <Music />
        </div>
      )}
    </div>
  );
}

export default App;
