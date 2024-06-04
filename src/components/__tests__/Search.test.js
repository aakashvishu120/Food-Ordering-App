import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//fetch function is not given by javascript it is given by browser and in testing it does use browser like thing not browser need to create mock fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});


//integration testing
it('Should search res list for pizza text input', async () => {
    // When testing, code that causes React state updates should be wrapped into act(...): or when use async operation
    await act(async () => 
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardBeforeSearch.length).toBe(9);

    const searchBtn = screen.getByRole("button" , {name : "Search"});
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput , {target : {value : "pizza"}});
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);
});
