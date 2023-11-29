describe("Propose", () => {
  it("Create new propose", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");

    cy.get("#new-proposal-btn").click();

    cy.get("#model").type("model");
    cy.get("#company").type("company");
    cy.get("#engine").type("engine");
    cy.get("#year").type("2000");
    cy.get("#color").type("color");
    cy.get("#minValue").type("5000");

    cy.get("#confirm-btn").click();

    cy.get("#snackbar").should("be.visible");
  });

  it("Approve propose", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");

    cy.get("#new-proposal-btn").click();

    cy.get("#model").type("model");
    cy.get("#company").type("company");
    cy.get("#engine").type("engine");
    cy.get("#year").type("2000");
    cy.get("#color").type("color");
    cy.get("#minValue").type("5000");

    cy.get("#confirm-btn").click();

    cy.get("#snackbar").should("be.visible");

    cy.get("#navigate-proposes").click();

    cy.url().should("include", "/proposes");

    cy.get("#approve-btn").click();

    cy.get("#modal-min-value").type("10000");
    cy.get("#modal-approve-btn").click();

    cy.get("#snackbar").should("be.visible");
  });

  it("Reject propose", () => {
    cy.visit("http://localhost:3000");

    cy.get("#username").type("admin");
    cy.get("#password").type("senha");

    cy.get(":button").click();

    cy.url().should("include", "/stock");

    cy.get("#new-proposal-btn").click();

    cy.get("#model").type("model");
    cy.get("#company").type("company");
    cy.get("#engine").type("engine");
    cy.get("#year").type("2000");
    cy.get("#color").type("color");
    cy.get("#minValue").type("5000");

    cy.get("#confirm-btn").click();

    cy.get("#snackbar").should("be.visible");

    cy.get("#navigate-proposes").click();

    cy.url().should("include", "/proposes");

    cy.get("#reject-btn").click();

    cy.get("#modal-reject-btn").click();

    cy.get("#reject-btn").should("not.exist");
  });
});
