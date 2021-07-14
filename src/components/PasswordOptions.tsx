import React, { memo, useState } from "react";
import { OptionProps } from "./OptionProps";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/PasswordOptions.css";

const options_config = {
  max: 50,
  min: 2,
  default: 5,
};

function PasswordOptions(props: OptionProps) {
  const { checked, clickHandler, lengthChangeHandler, optionsEnabled } = props;
  let [lengthValue, changeLength] = useState(options_config.default);

  function lengthChanger(e: React.ChangeEvent<HTMLInputElement>) {
    lengthChangeHandler(e);
    changeLength((lengthValue = Number(e.target.value)));
  }

  function handleRadioButtonChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.checked) {
    }
  }

  function manualLengthChanger(e: React.ChangeEvent<HTMLInputElement>) {
    if (Number(e.currentTarget.value) > options_config.max)
      e.currentTarget.value = e.currentTarget.value.slice(0, -1);
    else lengthChanger(e);
  }

  return (
    <div className="options__wrapper">
      <ul className="collapsible hoverable">
        <li>
          <div className="collapsible-header ">
            <i className="material-icons">settings</i>Настроить пароль
          </div>
          <div className="collapsible-body ">
            <div className="row">
              <div className="col s12 m6 options__container expand">
                <label className="">
                  <input
                    disabled={!optionsEnabled && checked.digits}
                    /* 1  1  0
                       1  0  0
                       0  1  1
                       0  0  0*/
                    type="checkbox"
                    id="digits"
                    onClick={clickHandler}
                    defaultChecked={checked.digits}
                    className="filled-in"
                  />
                  <span>Цифры</span>
                </label>
                <label className="">
                  <input
                    disabled={!optionsEnabled && checked.lowercase}
                    /* 1  1  0
                       1  0  0
                       0  1  1
                       0  0  0*/
                    type="checkbox"
                    id="lowercase"
                    onClick={clickHandler}
                    defaultChecked={checked.lowercase}
                    className="filled-in"
                  />
                  <span>Строчные буквы</span>
                </label>
                <label className="">
                  <input
                    disabled={!optionsEnabled && checked.uppercase}
                    type="checkbox"
                    id="uppercase"
                    onClick={clickHandler}
                    defaultChecked={checked.uppercase}
                    className="filled-in"
                  />
                  <span>Заглавные буквы</span>
                </label>
                <label className="">
                  <input
                    disabled={!optionsEnabled && checked.signs}
                    type="checkbox"
                    name=""
                    id="signs"
                    onClick={clickHandler}
                    defaultChecked={checked.signs}
                    className="filled-in"
                  />
                  <span>Спец. символы</span>
                </label>
              </div>
              <form action="#" className="col s12 m6">
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>Не использовать спорные символы </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" />
                    <span>Только буквы</span>
                  </label>
                </p>
                <p>
                  <label>
                    <input name="group1" type="radio" defaultChecked={true} />
                    <span>Все символы</span>
                  </label>
                </p>
              </form>
            </div>
            <div className="row">
              <form action="#" className="col m11 s10">
                <p className="range-field">
                  <input
                    type="range"
                    min={options_config.min}
                    max={options_config.max}
                    onChange={lengthChanger}
                    value={lengthValue}
                  />
                </p>
              </form>
              <div className="input-field inline col m1 s2">
                <input
                  id="length"
                  type="number"
                  className="validate"
                  value={lengthValue}
                  onChange={manualLengthChanger}
                  max={options_config.max}
                  min={options_config.min}
                />
                <label htmlFor="length">Length</label>
                {/* <span className="col s1 text">{lengthValue}</span> */}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default memo(PasswordOptions);



// [1,  5,  9]
// [10, 11, 13] 
// [12, 13, 15]

// 1 2
// 1 3