describe("Login", () => {
  it("Login invalid user", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("teste");
    cy.get("#password").type("teste");

    cy.get(".loginButton").should("not.have.a.property", "disabled");

    cy.get("#snackbar").should("not.exist");

    cy.get(".loginButton").click();

    cy.get("#snackbar").should("be.visible");
  });

  it("Login no user", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").clear();
    cy.get("#password").clear();

    cy.get(":button").should("be.disabled");
  });

  it("Login valid user", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");
  });
});
