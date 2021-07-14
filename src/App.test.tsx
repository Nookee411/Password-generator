import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import PasswordGenerator from "./PasswordGenerator";

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("password generator", () => {
  let generator = PasswordGenerator();
  console.log(generator.config);
  expect(
    generator.config ===
      { uppercase: true, lowercase: true, digits: true, signs: true }
  ).toBeTruthy;
});
