import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("should render the title", () => {
    // Test goes here
    render(<Header title="Netflix clone" />);

    const header = screen.getByRole("heading", { name: "Netflix clone" });

    expect(header).toBeInTheDocument();
  });
});
