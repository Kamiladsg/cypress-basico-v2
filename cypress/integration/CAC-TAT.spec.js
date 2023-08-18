/// <reference types="Cypress" />

const { functions } = require("cypress/types/lodash")

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it.only('verifica o título da aplicação', function() {
     cy.title().should("be.equal", "Central de Atendimento ao Cliente TAT")
     })

     it("Preencher os campos obrigatórios e envia o formulário", function(){

     })
  })
  

  