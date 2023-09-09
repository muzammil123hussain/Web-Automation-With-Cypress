/// <reference types="Cypress" />

import { TodoPage } from "../page-objects/todo-page";

describe("TODO Test Cases", () => {
  const todoPage = new TodoPage();

  beforeEach(() => {
    todoPage.navigate();
    todoPage.addTodo("Learn Cypress");
  });

  it("Open TODO app", () => {
    cy.get("label").should("have.text", "Learn Cypress");
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
