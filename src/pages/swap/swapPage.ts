// / <reference types="Cypress" />

import { CommonPage } from '../commonPage'

export class SwapPage extends CommonPage {
  elementYml: any
  gasConfig = undefined
  timeOut = this.envVariable.timeOut
  constructor(elementYml) {
      super(elementYml);
  }

  route = {
      targetUrl: '/swap'
  }

  switchToTargetPage() {
      cy.visit(this.route.targetUrl)
      cy.reload()
      cy.get("a[href='/swap']").should('be.visible')
      return this
  }

  get swapFromAmount() {
    return this.getElement(this.elementYml.swapFromAmount)
  }

  get swapInput() {
    return this.getElement(this.elementYml.swapInput)
  }

  get swapOutput() {
    return this.getElement(this.elementYml.swapOutput)
  }

  get swapButton() {
    return this.getElement(this.elementYml.swapButton)
  }

  get confirmButton() {
    return this.getElement(this.elementYml.confirmButton)
  }

  get swapInputToken() {
    return this.getElement(this.elementYml.swapInputToken)
  }

  get swapOutputToken() {
    return this.getElement(this.elementYml.swapOutputToken)
  }

  get tokenSearchInput() {
    return this.getElement(this.elementYml.tokenSearchInput)
  }

  get tokenSearchResult() {
    return this.getElement(this.elementYml.tokenSearchResult)
  }

  get settingButton() {
    return this.getElement(this.elementYml.settingButton)
  }

  get inputSlippagetext() {
    return this.getElement(this.elementYml.inputSlippagetext)
  }

  get closeButton() {
    return this.getElement(this.elementYml.closeButton)
  }

  changeSettings(percent='5') {
    //cy.wait(this.timeOut)
    cy.contains('Slippage Tolerance').siblings('div[color="primary"]').invoke('text').then(text => {
      if(text != `${percent}%`)
      {
        this.settingButton.click()
        cy.contains("Settings").should('be.visible')
        this.inputSlippagetext.eq(0).type(percent)
        this.closeButton.click()
      }
    })
  }

  async swapToken(input="", output="", fromToken = "tBNB", toToken = "CAKE", confirm = true) {
   //cy.wait(this.timeOut)
    this.swapFromAmount.should('not.contain', 'Loading')
    this.changeToken(fromToken, toToken)
    if(input)
      this.swapInput.type(input, {force: true})
    if(output)
      this.swapOutput.type(output, {force: true})
      this.clickSwapButton(fromToken)
    if (confirm == true) {
      cy.confirmMetamaskTransaction(this.gasConfig)
      cy.contains("Transaction Submitted").should('be.visible')
      cy.get("button").contains('Close').click()
    }
    else {
      cy.rejectMetamaskTransaction()
      cy.contains("Transaction rejected").should('be.visible')
      cy.get("button").contains('Dismiss').click()
    }  
  }

  clickSwapButton(fromToken) {
    this.swapButton.then(($swapBtn) => {  
      if($swapBtn.prop('disabled')){
        cy.get('button').contains(`Enable ${fromToken}`).should('be.visible')
        cy.get('button').contains(`Enable ${fromToken}`).click()
        cy.confirmMetamaskPermissionToSpend()
        this.swapButton.should('not.be.disabled')
      }
    })
    this.swapButton.invoke('text').then (text => {
      this.swapButton.click({timeout: 3000})
      if(text == "Swap Anyway")
      {
        cy.window().then(function(p){
          cy.stub(p, "prompt").returns ("confirm")
        })
      }
    })
    this.confirmButton.click()
  }

  searchToken(token) {
    cy.contains('Select a Token').should('be.visible')
    let tokenSearch = ((token == "tBNB") ? "BNB" : token)
    this.tokenSearchInput.type(tokenSearch, {force: true}).then(() => {
      this.tokenSearchResult.should('be.visible')
      cy.wait(this.timeOut)
      this.tokenSearchResult.eq(0).find('div[color="text"]').should('contain', token)
      this.tokenSearchResult.eq(0).click({force:true})
      this.closeButton.click({force:true})
    })
    
  }

  changeToken(fromToken, toToken) {
    fromToken = (!fromToken ? "tBNB" : fromToken)
    toToken = (!toToken ? "CAKE" : toToken)
    this.swapInputToken.invoke('text').then ((text) => {
      if(!fromToken.includes(text)){
        this.swapInputToken.click()
        this.searchToken(fromToken)
      }
      this.swapOutputToken.invoke('text').then ((text) => {
        if(!toToken.includes(text)) {
          this.swapOutputToken.click()
          this.searchToken(toToken)
        }
      })
    })
  }

  switchNetwork(description) {
    var networkItem = this.getNetWorkData(description)[0]
    cy.changeNetwork(description, networkItem.networkType, networkItem.chainId, this.route.targetUrl)
    cy.visit(this.route.targetUrl)
  }
}
