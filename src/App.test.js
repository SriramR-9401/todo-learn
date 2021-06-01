import { render, screen } from "@testing-library/react";
import Todo from "./to-do";

test("Successfully Rendered", () => {
	render(<Todo />);
	const linkElement = screen.getByText("ToDo Application");
	expect(linkElement).toBeInTheDocument();
});
