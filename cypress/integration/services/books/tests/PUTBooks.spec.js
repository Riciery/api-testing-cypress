/// <reference types="cypress" />

import * as PUTBooks from '../requests/PUTBooks.request'
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('PUT Book', () => {
    it('Alterar um livro', () => {
        GETBooks.allbooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.not.be.null
                expect(resChangeBook.body.title).to.be.eq('Gato de Botas')
            })
        })    
    });

    it('Criar um livro e alterar', () => {
        POSTBooks.addbook().then((resAddBook) => {
            PUTBooks.changeBook(resAddBook.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200)
                expect(resChangeBook.body).to.not.be.null
                expect(resChangeBook.body.description).to.be.eq('Um gato de botasss')
            })
        })
    });
});