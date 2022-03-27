context("Hover Menus", () => {
  it("Opens the page and tries to display the mobile dropdown menu", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(430, 600);

    cy.get('[data-testid="mobileDropDownButton"]').click();
    cy.get('[data-testid="mobileDropDownMenu"]').should("be.visible");
  });

  it("Opens the page and checks visibility of the 'about us' dropdown menu in the DesktopHeader before and after hovering", () => {
    cy.visit("http://localhost:3000");

    cy.get("#aboutDropDown").should("have.css", "visibility", "hidden");
    cy.contains("about us").realHover();
    cy.get("#aboutDropDown").should("have.css", "visibility", "visible");
  });

  it("Opens the page and checks visibility of the 'our producs' dropdown menu in the DesktopHeader before and after hovering", () => {
    cy.visit("http://localhost:3000");

    cy.get("#productsDropDown").should("have.css", "visibility", "hidden");
    cy.contains("our products").realHover();
    cy.get("#productsDropDown").should("have.css", "visibility", "visible");
  });

  it("Opens the page and checks visibility of the 'intimate health' dropdown menu in the DesktopHeader before and after hovering", () => {
    cy.visit("http://localhost:3000");

    cy.get("#intimateDropDown").should("have.css", "visibility", "hidden");
    cy.contains("intimate health").realHover();
    cy.get("#intimateDropDown").should("have.css", "visibility", "visible");
  });
});
//cy.get('[data-testid="mobileDropDownButton"]').should('be.visible')
