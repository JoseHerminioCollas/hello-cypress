
describe('MinHooks', function () {
    describe('Content and Form', () => {
        it('should have certain content', function () {
            cy.visit('https://min-hooks-goatstone.appspot.com/')
            cy.contains('Widgets Names')
            cy.contains('Add Widget Name')
            cy.contains('Widget Name List')
        })
    })
    describe('Add Widget Name', () => {
        it('should enable user adding text to input', () => {
            cy.visit('https://min-hooks-goatstone.appspot.com/');
            cy.contains('Widgets Names')
            cy.get('article.widget-add-control input')
                .type('XXX')
            cy.get('article.widget-add-control input')
                .should('have.value', 'XXX')
        })
        it('should enable user adding text to the displayed list', () => {
            cy.visit('https://min-hooks-goatstone.appspot.com/')
            cy.contains('Widgets Names')
            cy.get('article.widget-add-control input')
                .type('XXX')
            cy.get('article.widget-add-control button')
                .click()
            cy.contains('XXX')
        })
        it('should enable user to delete list items', () => {
            cy.visit('https://min-hooks-goatstone.appspot.com/')
            cy.get('article.widget-add-control input')
                .type('XXX')
            cy.get('article.widget-add-control button')
                .click()
            cy.get('.widget-list-grid').contains('XXX')
            cy.get('article.widget-list button.delete-widget:first')
                .click()
            cy.contains('XXX').should('not.exist')
        })
    })
})
