describe("Vehicles", () => {
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

    cy.get("#navigate-stock").click();

    cy.url().should("include", "/stock");

    cy.get("#vehicle-2000").click();

    cy.url().should("include", "/stock/model%20engine");

    cy.get("#confirm-sell").click();

    cy.get("#modal-value").type("15000");
    cy.get("#modal-phone").type("90909090");
    cy.get("#modal-customer").type("customer");
    cy.get("#modal-email").type("email@email.com");

    cy.get("#modal-sell-vehicle-btn").click();

    cy.get("#snackbar").should("be.visible");

    cy.url().should("include", "/stock");
    cy.url().should("not.include", "/model%20engine");
  });
});
