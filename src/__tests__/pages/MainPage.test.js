import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MainPage } from "../../components/Pages/MainPage";

describe("Main Page Interactions", () => {
  it("should open dropdown menu on mobile", () => {
    global.innerWidth = 430;
    render(<MainPage />);

    const menuButton = screen.getByTestId("mobileDropDownButton");

    fireEvent.click(menuButton);

    const dropDownMenu = screen.getByTestId("mobileDropDownMenu");

    expect(dropDownMenu).toBeTruthy();
  });
});
