import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    changeConfig(newConfig);
  }, [config]);

  let digits = "1234567890";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
  let signs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passwordAlphabet: String = "";

  return {
    changeConfig,
    config,
    generatePassword: function (length: number) {
      let getRandomIndex = function (length: number): number {
        return Math.floor(Math.random() * length);
      };
      let compilePasswordAlphabet = (): String =>
        (config.lowercase ? lowercase : "") +
        (config.uppercase ? uppercase : "") +
        (config.digits ? digits : "") +
        (config.signs ? signs : "");
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

// export class PasswordGenerator {
//  private digits = "1234567890";
//  private lowercase = "abcdefghijklmnopqrstuvwxyz";
//  private uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
//  private signs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
//  private passwordAlphabet: String = "";
//   config: PasswordConfig = {
//     digits: true,
//     uppercase: true,
//     lowercase: true,
//     signs: true,
//   };

//   constructor() {}

//   generatePassword(length: Number = 10) {
//     this.passwordAlphabet = this.compilePasswordAlphabet();
//     let password = "";
//     let alphabetLength = this.passwordAlphabet.length;
//     for (let i = 0; i < length; i++) {
//       password += this.passwordAlphabet[this.getRandomIndex(alphabetLength)];
//     }
//     return password;
//   }

//  let getRandomIndex(length: number): number {
//     return Math.floor(Math.random() * length);
//   }

//  let compilePasswordAlphabet(): String {
//     return (
//       (this.config.lowercase ? this.lowercase : "") +
//       (this.config.uppercase ? this.uppercase : "") +
//       (this.config.digits ? this.digits : "") +
//       (this.config.signs ? this.signs : "")
//     );
//   }
// }
