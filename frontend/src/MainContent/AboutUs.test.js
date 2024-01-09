import React from "react";
import AboutUs from "./AboutUs";
import { render, screen, waitFor } from "@testing-library/react";

it("renders without crashing", function () {
  render(<AboutUs />);
});
