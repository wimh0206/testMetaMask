/// <reference types = "cypress" />
let YAML = require('yamljs')
let path = require('path')
var fs = require('file-system')
import networkData from '../configs/yaml/swap/network'

export class CommonPage {
  elementYml: object
  envVariable = Cypress.env()
  constructor(elementYml) {
      this.elementYml = elementYml
  }
  switchToTargetPage() {
      throw new Error(
        `You have to implement the method 'switchToTargetPage' on your own class`
      )
    }
  
  go() {
    this.switchToTargetPage()
    return this
  }

  getElement(locator, timeout=30000) {
    cy.log(`---Start to Locate ${JSON.stringify(locator)} now---`)
    if (locator['locator']) {
      locator = locator['locator']
    }
    
    return cy.get(locator,{ timeout : timeout })
  }

  getNetWorkData(name = 'BNB Smart Chain'){
  var network = networkData['network']
 
  return network.filter(item => {return item.networkName === name})
  }
}
