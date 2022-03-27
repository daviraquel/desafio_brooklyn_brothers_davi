import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import { MobileHeader } from "../../components/Header/Mobile/MobileHeader";

describe("Mobile Dropdown menu displays upon clicking button", () => {
  it("should open dropdown menu on mobile", async () => {
    global.innerWidth = 430;
    render(<MobileHeader />);

    const menuButton = screen.getByTestId("mobileDropDownButton");

    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByTestId("mobileDropDownMenu")).toBeInTheDocument();
    });
  });
});
