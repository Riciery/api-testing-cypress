/// <reference types="cypress" />

function allbooks() {
    // cy.request - client http
    return cy.request({
        method: 'GET',
        url: 'Books',
        failOnStatusCode: false,
    })
}

export { allbooks };