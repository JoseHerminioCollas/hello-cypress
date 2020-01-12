import { HelloX, HelloState } from '../src/hello-x.jsx'
import React from 'react'

const initLatLng = [47.6, -122.3]
const mapStatus = {
  center: [initLatLng],
  zoomLevel: 12,
  viewPortRadius: 50000,
}
const mapControl = {
  moveCenterTo: initLatLng,
  moveMarkerTo: initLatLng,
  placeFocusId: null,
}
const mapStatusActions = {
  center: () => 1,
  zoomLevel: () => 1
}
const placeInfo = []
const props = {
  placeInfo,
  mapControl,
  mapStatusActions,
}
// import Map from '../map-lab/src/components/Map'
// describe('MinHooks', function () {
//     describe('AAA', () => {
//         it('XXX', function () {
//             cy.visit('https://map-lab-goatstone.appspot.com/')
//             // cy.contains('[data-id="goto-place"]')
//             cy.get('[data-id="goto-place"]').contains('Seattle')
//             // expect(true).to.be.true
//         })
//     })
// })

/* eslint-env mocha */
describe('HelloX component', () => {
  it('works', () => {
    cy.mount(<HelloX name='SuperMan' />)
    cy.contains('Hello SuperMan!')
    // cy.mount(<Map {...props} />)
  })
})
//   it('renders Unicode', () => {
//     cy.mount(<HelloX name='🌎' />)
//     cy.contains('Hello 🌎!')
//     cy.percySnapshot('Hello globe')
//     cy.wait(1000)
//   })
// })

// describe('HelloState component', () => {
//   it('changes state', () => {
//     cy.mount(<HelloState />)
//     cy.contains('Hello Spider-man!')
//     const stateToSet = { name: 'React' }
//     cy.get(HelloState).invoke('setState', stateToSet)
//     cy.get(HelloState)
//       .its('state')
//       .should('deep.equal', stateToSet)
//     cy.contains('Hello React!')
//   })
// })
