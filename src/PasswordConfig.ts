// export class PasswordConfig {
//   uppercase: boolean;
//   lowercase: boolean;
//   digits: boolean;
//   signs: boolean;

//   constructor(
//     uppercase: boolean = true,
//     lowercase: boolean = true,
//     digits: boolean = true,
//     signs: boolean = true
//   ) {
//     this.uppercase = uppercase;
//     this.lowercase = lowercase;
//     this.digits = digits;
//     this.signs = signs;
//   }
// }

export interface PasswordConfig {
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  signs: boolean;
}
