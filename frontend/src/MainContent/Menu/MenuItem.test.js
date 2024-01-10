import React from "react";
import { render } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("MenuItem Component", () => {
  it("renders item details", () => {
    const item = {
      id: 1,
      name: "Sushi",
      description: "Delicious sushi",
      price: 10,
    };
    const { getByText } = render(<MenuItem item={item} />);

    expect(getByText("Sushi")).toBeInTheDocument();
    expect(getByText("Delicious sushi")).toBeInTheDocument();
    expect(getByText("Price: $10")).toBeInTheDocument();
  });

});
