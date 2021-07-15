import React, { ChangeEvent, useEffect, useState } from "react";
import "./styles/App.css";
import PasswordForm from "./components/PasswordForm";
import PasswordOptions from "./components/PasswordOptions";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import About from "./pages/About";
import LoadingIcon from "./components/LoadingIcon";
import generatePassword, { DEFAULT_CONFIG } from "./model/generatePassword";

function App() {
  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);

    setTimeout(() => setLoading(false), 1000);
  });

  const [passwordLength, changeLength] = useState(5);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [password, setPassword] = useState(
    generatePassword(DEFAULT_CONFIG, passwordLength)
  );
  const [isLoading, setLoading] = useState(true);

  function lengthChanged(e: ChangeEvent<HTMLInputElement>) {
    changeLength(Number(e.currentTarget.value));
    refreshButtonClick();
  }

  function refreshButtonClick() {
    setPassword(generatePassword(config, passwordLength));
  }

  return (
    <div className="container">
      <div className="row">
        <PasswordForm password={password} clickHandler={refreshButtonClick} />
      </div>
      <div className="row">
        <PasswordOptions
          config={config}
          setConfig={setConfig}
          lengthChangeHandler={lengthChanged}
        />
      </div>
      {isLoading && <LoadingIcon />}
      {!isLoading && <About />}
    </div>
  );
}

export default App;
