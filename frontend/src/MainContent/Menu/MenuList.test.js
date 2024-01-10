import React from "react";
import { render } from "@testing-library/react";
import MenuList from "./MenuList";

describe("MenuList Component", () => {
  it("renders list of items", () => {
    const items = [
      { id: 1, name: "Sushi", description: "Delicious sushi", price: 10 },
    ];
    const { getByText } = render(<MenuList items={items} />);

    expect(getByText("Sushi")).toBeInTheDocument();
    expect(getByText("Delicious sushi")).toBeInTheDocument();
    expect(getByText("Price: $10")).toBeInTheDocument();
  });

});
