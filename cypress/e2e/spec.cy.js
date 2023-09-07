describe("Open TODO and add element and click on it", () => {
  it("passes", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo").type("learn Cypress{enter}");

    cy.get("label").should("have.text", "learn Cypress");
    cy.get(".toggle").should("not.be.checked");

    cy.get(".toggle").click();
    cy.get("label").should("have.css", "text-decoration-line", "line-through");

    cy.contains("Clear").click();
    cy.get(".new-todo").should("not.have.descendants", "li");
  });
});
