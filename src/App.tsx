import React, { ChangeEvent, useEffect, useState } from "react";
import "./styles/App.css";
import PasswordForm from "./components/PasswordForm";
import PasswordOptions from "./components/PasswordOptions";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import About from "./pages/About";
import generatePassword, { DEFAULT_CONFIG } from "./model/generatePassword";

function App() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  });

  const [passwordLength, changeLength] = useState(5);
  const [config, changeConfig] = useState(DEFAULT_CONFIG);
  const [password, changePassword] = useState(
    generatePassword(DEFAULT_CONFIG, passwordLength)
  );

  function lengthChanged(e: ChangeEvent<HTMLInputElement>) {
    changeLength(Number(e.currentTarget.value));
    refreshButtonClick();
  }
  

  function refreshButtonClick() {
    changePassword(generatePassword(config, passwordLength));
  }

  return (
    <div className="container">
      <div className="row">
        <PasswordForm password={password} clickHandler={refreshButtonClick} />
      </div>
      <div className="row">
        <PasswordOptions
          config={config}
          changeConfig={changeConfig}
          lengthChangeHandler={lengthChanged}
        />
      </div>
      <About />
    </div>
  );
}

export default App;
