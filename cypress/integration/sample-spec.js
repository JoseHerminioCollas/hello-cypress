
describe('MinHooks', function() {
    it('find content', function() {
        cy.visit("https://min-hooks-goatstone.appspot.com/");
        cy.contains("Widget")
    })
  })
