describe("TODO Test Cases", () => {
  beforeEach(() => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo").type("learn Cypress{enter}");
  });
  it("Open TODO app", () => {
    cy.get("label").should("have.text", "learn Cypress");
    cy.get(".toggle").should("not.be.checked");
  });

  it("Mark TODO complete", () => {
    cy.get(".toggle").click();
    cy.get("label").should("have.css", "text-decoration-line", "line-through");
  });

  it("Clear TODO list", () => {
    cy.get(".toggle").click();
    cy.contains("Clear").click();
    cy.get(".new-todo").should("not.have.descendants", "li");
  });
});
