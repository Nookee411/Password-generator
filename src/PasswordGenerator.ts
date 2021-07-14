import { PasswordConfig } from "./PasswordConfig";

export default function PasswordGenerator() {
  let digits = "1234567890";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
  let signs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  let passwordAlphabet: String = "";


  return {
    config: {
      uppercase: true,
      lowercase: true,
      digits: true,
      signs: true,
    },
    generatePassword: function (length: number) {
      let getRandomIndex = function (length: number): number {
        return Math.floor(Math.random() * length);
      };
      let compilePasswordAlphabet = (): String => {
        return (
          (this.config.lowercase ? lowercase : "") +
          (this.config.uppercase ? uppercase : "") +
          (this.config.digits ? digits : "") +
          (this.config.signs ? signs : "")
        );
      };
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
