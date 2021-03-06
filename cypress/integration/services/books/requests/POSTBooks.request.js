/// <reference types="cypress" />

const payloadAddBook = require('../payloads/add-book.json')

function addbook() {
    // cy.request - client http
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export { addbook };