import React, { ChangeEvent, useEffect, useState } from "react";
import "./styles/App.css";
import PasswordForm from "./components/PasswordForm";
import PasswordOptions from "./components/PasswordOptions";
import { PasswordConfigKey } from "./PasswordConfig";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import About from "./components/About";
import usePasswordGenerator from "./hooks/usePasswordGenerator";

function App() {
  const { generatePassword, changeConfig, config } = usePasswordGenerator();

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  });

  const [passwordLength, changeLength] = useState(5);
  const [password, changePassword] = useState(generatePassword(passwordLength));
  const [enabled, enabledChanged] = useState(true);

  function lengthChanged(e: ChangeEvent<HTMLInputElement>) {
    changeLength(Number(e.currentTarget.value));
    refreshButtonClick();
  }
  function optionChanged(checkboxID: PasswordConfigKey) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      if (checkboxID in config) config[checkboxID] = !config[checkboxID];

      changeConfig(config);
      enabledChanged(
        Number(config.digits) +
          Number(config.lowercase) +
          Number(config.uppercase) +
          Number(config.signs) >
          1
      );
    };
  }

  function refreshButtonClick() {
    changePassword(generatePassword(passwordLength));
  }

  return (
    <div className="container">
      <div className="row">
        <PasswordForm password={password} clickHandler={refreshButtonClick} />
      </div>
      <div className="row">
        <PasswordOptions
          checked={config}
          clickHandler={optionChanged}
          lengthChangeHandler={lengthChanged}
          optionsEnabled={enabled}
        />
      </div>
      <About />
    </div>
  );
}

export default App;
