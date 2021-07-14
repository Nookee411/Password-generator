import { ChangeEventHandler, MouseEventHandler } from "react";
import { PasswordConfig } from "../PasswordConfig";

export interface OptionProps {
  checked: PasswordConfig;
  clickHandler: Function;
  lengthChangeHandler: ChangeEventHandler;
  optionsEnabled: boolean;
}
