import React, { ChangeEvent, MouseEvent, useState } from "react";
import "./styles/App.css";
import PasswordForm from "./components/PasswordForm";
import PasswordGenerator from "./PasswordGenerator";
import PasswordOptions from "./components/PasswordOptions";
import { PasswordConfig } from "./PasswordConfig";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import About from "./components/About";

let generator = PasswordGenerator();

function App() {
  let initialConfig: PasswordConfig = {
    uppercase: true,
    lowercase: true,
    digits: true,
    signs: true,
  };
  let [config, changeConfig] = useState(initialConfig);
  let [passwordLength, changeLength] = useState(5);
  let [password, changePassword] = useState(
    generator.generatePassword(passwordLength)
  );
  let [enabled, enabledChanged] = useState(true);

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
  });
  function lengthChanged(e: ChangeEvent<HTMLInputElement>) {
    changeLength((passwordLength = Number(e.currentTarget.value)));
    refreshButtonClick();
  }
  function optionChanged(e: MouseEvent<HTMLElement>) {
    let newConfig = config;
    switch (e.currentTarget.id) {
      case "signs": {
        newConfig.signs = !config.signs;
        break;
      }
      case "digits": {
        newConfig.digits = !config.digits;
        break;
      }
      case "uppercase": {
        newConfig.uppercase = !config.uppercase;
        break;
      }
      case "lowercase": {
        newConfig.lowercase = !config.lowercase;
        break;
      }
      default: {
      }
    }
    changeConfig((generator.config = newConfig));
    enabledChanged(
      (enabled =
        Number(config.digits) +
          Number(config.lowercase) +
          Number(config.uppercase) +
          Number(config.signs) >
        1)
    );
    console.log(generator.config);
  }
  function refreshButtonClick() {
    changePassword((password = generator.generatePassword(passwordLength)));
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
