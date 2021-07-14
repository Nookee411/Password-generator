import { useState } from "react";
import { PasswordConfig } from "../PasswordConfig";

export const defaultConfig = {
  uppercase: true,
  lowercase: true,
  digits: true,
  signs: true,
};

export default function usePasswordGenerator(
  newConfig: PasswordConfig = defaultConfig
) {
  const [config, changeConfig] = useState(newConfig);

  let digits = "1234567890";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
  let signs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passwordAlphabet: String = "";

  let getRandomIndex = function (length: number): number {
    return Math.floor(Math.random() * length);
  };
  let compilePasswordAlphabet = (): String =>
    (config.lowercase ? lowercase : "") +
    (config.uppercase ? uppercase : "") +
    (config.digits ? digits : "") +
    (config.signs ? signs : "");

  return {
    changeConfig,
    config,
    generatePassword: function (length: number) {
      passwordAlphabet = compilePasswordAlphabet();
      let password = "";
      let alphabetLength = passwordAlphabet.length;
      for (let i = 0; i < length; i++) {
        password += passwordAlphabet[getRandomIndex(alphabetLength)];
      }
      return password;
    },
  };
}
