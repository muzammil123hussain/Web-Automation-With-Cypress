describe("Open TODO and add element and click on it", () => {
  it("passes", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
    cy.get(".new-todo").type("learn Cypress{enter}");
    cy.get(".toggle").click();
    cy.contains("Clear").click();
  });
});
