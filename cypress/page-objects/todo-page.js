/// <reference types="Cypress" />

export class TodoPage {
  navigate() {
    cy.visit("http://todomvc-app-for-testing.surge.sh/");
  }
  addTodo(todotxt) {
    cy.get(".new-todo").type(todotxt + "{enter}");
  }
}
