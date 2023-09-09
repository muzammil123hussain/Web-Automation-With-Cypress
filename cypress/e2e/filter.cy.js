/// <reference types="Cypress" />

describe("TODO Filter Test Cases", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");

    cy.get(".new-todo").type("Learn JS{enter}");
    cy.get(".new-todo").type("Learn Cypress{enter}");
    cy.get(".new-todo").type("Learn Playwright{enter}");

    cy.get(".todo-list li:nth-child(2) .toggle").click();
    cy.get(":nth-child(2) > .view > label").should(
      "have.css",
      "text-decoration-line",
      "line-through"
    );
  });

  it("Filer Active TODO items", () => {
    cy.contains("Active").click();
    cy.get(".todo-list li").should("have.length", 2);
  });
  it("Filer Completed TODO items", () => {
    cy.contains("Completed").click();
    cy.get(".todo-list li").should("have.length", 1);
  });
  it("Filer All TODO items", () => {
    cy.contains("All").click();
    cy.get(".todo-list li").should("have.length", 3);
  });
});
