import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe('Contact Us Page Test Case', () => {
    
    //test and it keyword is used to test, these are alias to each
    it("Should load contact up component" , () => {
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        //assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button contact component" , () => {
        render(<Contact/>);
        const button = screen.getByRole("button");        //single textbox exist getByRole
        // const button = screen.getByText("Submit");
        //assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside contact component" , () => {
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the contact component" , () => {
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox");        //multiple textbox exist getAllByRole
        console.log(inputBoxes.length);
        expect(inputBoxes.length).toBe(2);
    });
});








