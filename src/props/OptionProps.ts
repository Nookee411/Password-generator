import { ChangeEventHandler } from "react";
import { PasswordConfig } from "../model/PasswordConfig";

export interface OptionProps {
  config: PasswordConfig;
  setConfig: React.Dispatch<React.SetStateAction<PasswordConfig>>;
  lengthChangeHandler: ChangeEventHandler;
}
