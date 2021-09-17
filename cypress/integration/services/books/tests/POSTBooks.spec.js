/// <reference types="cypress" />

import * as POSTBooks from '../requests/POSTBooks.request'

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBooks.addbook().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.title).to.eq('O Gato de Botas')
        })
    });
});