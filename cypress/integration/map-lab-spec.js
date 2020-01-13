const latLn = String([47.60107032220255, -122.2991180419922])

describe('Map Lab', () => {
  it('should have a debug DIV', function () {
    cy.visit('http://192.168.0.27:3000')
    cy.get('div.debug').contains('id')
    cy.get('div.debug').find('div').should($div => {
      const expectedLatLn = [47.01, -122.47].toString()
      const debugTxt = $div.text()
      const txt = debugTxt.replace(/center:(.{1,})zoom.*/, '$1')
      // const txt = debugTxt.replace(/center:([/d|\.|,]{1,})/, '$1')
      expect(expectedLatLn).to.equal(latLn)
    })
  })
})
