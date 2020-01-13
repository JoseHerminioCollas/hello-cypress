const latLn = String([47.60107032220255, -122.2991180419922])

const urls = [
  'https://map-lab-goatstone.appspot.com?debug=11',
  'http://192.168.0.27:3000'
]

describe('Map Lab', () => {
  it('should have a debug DIV', function () {
    cy.visit(urls[1])
    cy.get('div.debug').should($div => {
      const expectedLatLn = String([47.01, -122.47])
      const debugTxt = $div.text()
      const ltLn = debugTxt.replace(/center:(.{1,})zoom.*/, '$1')
      expect(expectedLatLn).to.equal(ltLn)
      cy.get('#map')
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 50, clientY: 50 })
        .trigger('mouseup', { force: true })
      expect(String([0, 0])).to.equal(
        debugTxt.replace(/center:(.{1,})zoom.*/, '$1')
      )
    })
  })
})
