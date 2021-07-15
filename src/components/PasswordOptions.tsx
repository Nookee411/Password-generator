import React, { useState, useEffect } from "react";
import { OptionProps } from "../props/OptionProps";
import "materialize-css/dist/css/materialize.min.css";
import "../styles/PasswordOptions.css";
import { PasswordConfig, PasswordConfigKey } from "../model/PasswordConfig";
import { groupID } from "../model/groupID";
import { DEFAULT_CONFIG } from "../model/generatePassword";
import { Formik } from "formik";

const options_config = {
  max: 50,
  min: 2,
  default: 5,
};

function PasswordOptions(props: OptionProps) {
  const { config, setConfig, lengthChangeHandler } = props;
  const [lengthValue, changeLength] = useState(options_config.default);
  const [enabled, enableChanged] = useState(true);
  const [mySettings, mySettingsChanged] = useState(false);

  useEffect(() => {
    enableChanged(
      Number(config.digits) +
        Number(config.lowercase) +
        Number(config.uppercase) +
        Number(config.signs) >
        1
    );
  }, [config]);

  //Handler for changeing password length via range input
  function lengthChanger(e: React.ChangeEvent<HTMLInputElement>) {
    lengthChangeHandler(e);
    changeLength(Number(e.target.value));
  }
  function optionChanged(checkboxID: PasswordConfigKey) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      const newConfig = { ...config, [checkboxID]: !config[checkboxID] };
      setConfig(newConfig);
      mySettingsChanged(true);
    };
  }

  function symbolGroupChanged(grID: groupID) {
    return function (e: React.ChangeEvent<HTMLInputElement>) {
      let newConfig: PasswordConfig;
      mySettingsChanged(false);
      switch (grID) {
        case groupID.all: {
          newConfig = { ...DEFAULT_CONFIG };
          break;
        }
        case groupID.defined: {
          newConfig = { ...config, dual: false };
          break;
        }
        case groupID.letters: {
          newConfig = {
            uppercase: true,
            lowercase: true,
            dual: false,
            signs: false,
            digits: false,
          };
          break;
        }
        default:
          newConfig = { ...config };
      }
      setConfig(newConfig);
    };
  }

  //Handler for changing password length via number input
  function manualLengthChanger(e: React.ChangeEvent<HTMLInputElement>) {
    if (Number(e.currentTarget.value) > options_config.max)
      e.currentTarget.value = e.currentTarget.value.slice(0, -1);
    else lengthChanger(e);
  }

  return (
    <ul className="collapsible">
      <li>
        <div className="collapsible-header ">
          <i className="material-icons">settings</i>Настроить пароль
        </div>
        <div className="collapsible-body ">
          <div className="row">
            <div className="col s12 m6 options__container expand">
              <label className="">
                <input
                  disabled={!enabled && config.digits}
                  type="checkbox"
                  // onClick={}
                  onChange={optionChanged("digits" as PasswordConfigKey)}
                  className="filled-in"
                  checked={config.digits}
                />
                <span>Цифры</span>
              </label>
              <label className="">
                <input
                  disabled={!enabled && config.lowercase}
                  /* 1  1  0
                       1  0  0
                       0  1  1
                       0  0  0*/
                  type="checkbox"
                  onChange={optionChanged("lowercase" as PasswordConfigKey)}
                  className="filled-in"
                  checked={config.lowercase}
                />
                <span>Строчные буквы</span>
              </label>
              <label className="">
                <input
                  disabled={!enabled && config.uppercase}
                  type="checkbox"
                  onChange={optionChanged("uppercase" as PasswordConfigKey)}
                  className="filled-in"
                  checked={config.uppercase}
                />
                <span>Заглавные буквы</span>
              </label>
              <label className="">
                <input
                  disabled={!enabled && config.signs}
                  type="checkbox"
                  name=""
                  onChange={optionChanged("signs" as PasswordConfigKey)}
                  className="filled-in"
                  checked={config.signs}
                />
                <span>Спец. символы</span>
              </label>
            </div>
            <form action="#" className="col s12 m6">
              <p>
                <label>
                  <input
                    name="group1"
                    type="radio"
                    onChange={symbolGroupChanged(groupID.defined)}
                  />
                  <span>Не использовать двучитаемые символы </span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="group1"
                    type="radio"
                    onChange={symbolGroupChanged(groupID.letters)}
                  />
                  <span>Только буквы</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    name="group1"
                    type="radio"
                    onChange={symbolGroupChanged(groupID.all)}
                  />
                  <span>Все символы</span>
                </label>
              </p>
              <p>
                <label>
                  <input
                    disabled={!mySettings}
                    name="group1"
                    type="radio"
                    checked={mySettings}
                  />
                  <span>Свои настройки</span>
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
            <div className="input inline col m1 s2">
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
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default PasswordOptions;

// [1,  5,  9]
// [10, 11, 13]
// [12, 13, 15]

// 1 2
// 1 3
