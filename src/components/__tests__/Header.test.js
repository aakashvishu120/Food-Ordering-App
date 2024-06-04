import { fireEvent, render, screen } from "@testing-library/react";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";


test("Should render Header Component with a login button", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"});  //specific button
    // const loginButton = screen.getByText("Login");   
    expect(loginButton).toBeInTheDocument();
});


test("Should render Header Component with a cart items 0", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    // const cartItems = screen.getByText("Cart (0 items)");
    const cartItems = screen.getByText(/Cart/);     //using regex
    expect(cartItems).toBeInTheDocument();
});


test("Should change Login Button to logout onClick", () => {
    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button" , {name : "Login"} );
    fireEvent.click(loginButton);      //click event

    const logoutButton = screen.getByRole("button" , {name : "Log Out"});
    expect(logoutButton).toBeInTheDocument();
});




