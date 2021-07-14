import { PasswordConfig } from "./PasswordConfig";

export class PasswordGenerator {
  private digits = "1234567890";
  private lowercase = "abcdefghijklmnopqrstuvwxyz";
  private uppercase = "ABCDEFGHIJKLMNOPQRSTYVWXYZ";
  private signs = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  private passwordAlphabet: String = "";
  config: PasswordConfig = {
    digits: true,
    uppercase: true,
    lowercase: true,
    signs: true,
  };

  constructor() {}

  generatePassword(length: Number = 10) {
    this.passwordAlphabet = this.compilePasswordAlphabet();
    let password = "";
    let alphabetLength = this.passwordAlphabet.length;
    for (let i = 0; i < length; i++) {
      password += this.passwordAlphabet[this.getRandomIndex(alphabetLength)];
    }
    return password;
  }

  private getRandomIndex(length: number): number {
    return Math.floor(Math.random() * length);
  }

  private compilePasswordAlphabet(): String {
    return (
      (this.config.lowercase ? this.lowercase : "") +
      (this.config.uppercase ? this.uppercase : "") +
      (this.config.digits ? this.digits : "") +
      (this.config.signs ? this.signs : "")
    );
  }
}
