import { PasswordConfig, PasswordConfigKey } from "./PasswordConfig";
import random from "lodash/random";

export const DEFAULT_CONFIG: PasswordConfig = {
  uppercase: true,
  lowercase: true,
  digits: true,
  signs: true,
  dual: true
};

export default function generatePassword(
  config: PasswordConfig = DEFAULT_CONFIG,
  length: number
) {
  const chars = {
    uppercase: "ABCDEFGHJKLMNPQRSTYVWXYZ",
    lowercase: "abcdefghijkmnopqrstuvwxyz",
    digits: "123456789",
    signs: "!#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    dual: "0OlI",
  };
  const passwordAlphabet = Object.keys(config)
    .filter((key) => config[key as PasswordConfigKey])
    .reduce((alphabet, key) => alphabet + chars[key as PasswordConfigKey], "");

  let password = "";
  for (let i = 0; i < length; i++) {
    password += passwordAlphabet[random(passwordAlphabet.length - 1)];
  }
  return password;
}
