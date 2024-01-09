import React from "react";
import Contact from "./Contact";
import { render } from "@testing-library/react";

it("renders without crashing", function () {
  render(<Contact />);
});
