describe('Map Lab', () => {
  it('should have a debug DIV', function () {
    cy.visit('http://192.168.0.27:3000')
    cy.get('div.debug').contains('id')
  })
})
