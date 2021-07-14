import { ChangeEventHandler } from "react";
import { PasswordConfig } from "../model/PasswordConfig";

export interface OptionProps {
  config: PasswordConfig;
  changeConfig: Function;
  lengthChangeHandler: ChangeEventHandler;
}
