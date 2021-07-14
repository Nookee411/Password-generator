export interface PasswordConfig {
  uppercase: boolean;
  lowercase: boolean;
  digits: boolean;
  signs: boolean;
  dual: boolean;
}

export type PasswordConfigKey = keyof PasswordConfig;
