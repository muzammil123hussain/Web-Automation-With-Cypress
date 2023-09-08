describe("TODO Filter Test Cases", () => {
  it("Add TODO items", () => {
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
    cy.get(".todi-list li");
  });
});
