/// <reference types="cypress" />

import { resolveModuleName } from "typescript"

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const timeOut = 2000
 
Cypress.Commands.add('connectWallet', () => { 
    const wallet = Cypress.env().wallet
    const allAccounts = undefined
    const privateKeySecretKey = wallet.privateKeySecretKey
    const network = wallet.network
    const password = wallet.password
    const timeOut = 2000

    cy.setupMetamask(privateKeySecretKey,'mainnet',password).then(setupFinished => {
        expect(setupFinished).to.be.true
      })
      cy.visit('/')
      cy.reload()
      cy.contains('Connect Wallet').should('be.visible')
      cy.get('button').contains("Connect Wallet").click()
      cy.get('div').contains("Metamask").click()
      cy.acceptMetamaskAccess()
        cy.allowMetamaskToAddNetwork().then(approved => {
          expect(approved).to.be.true;
        });
        cy.allowMetamaskToSwitchNetwork().then(approved => {
          expect(approved).to.be.true;
        });
  })

  Cypress.Commands.add('changeNetwork', (networkName = "BNB Smart Chain", networkType = "mainnet", chainId = 56, route ='/') => { 
    cy.wait(timeOut)
    cy.get('div[display="none,,,,,block"]').invoke('text').then(text => {
      if(text != networkName)
        {
          if(networkType == "mainnet")
          {
            cy.get('div[display="none,,,,,block"]').click({force: true})
            cy.get('button').contains(networkName).should('be.visible')
            cy.get('button').contains(networkName).click({force: true})
          }
          else
          {
            cy.visit(`${route}/?chainId=${chainId}`)
            cy.contains(`Switch to ${networkName}`).click()
          }

          if(networkName == "BNB Smart Chain Testnet"){
            cy.allowMetamaskToAddNetwork()
          }
          cy.allowMetamaskToSwitchNetwork()

        }   
    })
   
  })

