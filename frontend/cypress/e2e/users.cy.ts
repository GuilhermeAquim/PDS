describe("Users", () => {
  it("Add new user", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");

    cy.get("#navigate-users").click();

    cy.url().should("include", "/users");

    cy.get("#new-user-name").type("name");
    cy.get("#new-user-username").type("username");
    cy.get("#new-user-password").type("password");

    cy.get("#new-user-create").click();

    cy.get("#snackbar").should("be.visible");

    cy.get("#name").should("exist");
  });

  it("Remove user", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");

    cy.get("#navigate-users").click();

    cy.url().should("include", "/users");

    cy.get("#new-user-name").type("name");
    cy.get("#new-user-username").type("username");
    cy.get("#new-user-password").type("password");

    cy.get("#new-user-create").click();

    cy.get("#snackbar").should("be.visible");

    cy.get("#name").should("exist");

    cy.get("#icon-name").click();

    cy.get("#remove-user-btn").click();

    cy.get("#name").should("not.exist");
  });
});
