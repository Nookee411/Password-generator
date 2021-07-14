import { ChangeEventHandler, MouseEventHandler } from "react";
import { PasswordConfig } from "../PasswordConfig";

export interface OptionProps {
  checked: PasswordConfig;
  clickHandler: MouseEventHandler;
  lengthChangeHandler: ChangeEventHandler;
  optionsEnabled: boolean;
}
