import { SwapPage } from '../../pages/swap/swapPage'

let YAML = require('yamljs')
const path = require('path');
const using = require('jasmine-data-provider');
const testData = require('../../dataSource/swap/swapDataCorrect')
const testData1 = require('../../dataSource/swap/swapData')

const timeOut = 2000

describe ('Testing Metamask Swap',function() {
	const allAccounts = undefined 

	before(function(){ 
    cy.connectWallet()
	})

	beforeEach(function() {
		const yamlFile = './src/configs/yaml/swap/swap.yml'

		cy.readFile(yamlFile).then(function(yamlString) {
			cy.wrap(YAML.parse(yamlString)).as('elementFactory')
		})
	})

	using (testData1[Cypress.env().networkType], function(data, description) {
		it.only(`Swap Feature - ${description}`, function(){
			cy.get('@elementFactory').then(function (ele) {
				const swapPage = new SwapPage(ele)
				swapPage.go()
        swapPage.switchNetwork(data.networkName)
        swapPage.changeSettings('10')
        swapPage.swapToken(data.swapIn, data.swapOut, data.fromToken, data.toToken)
			})
		})
	})

  it(`Reject a swap transaction`, function(){
    cy.get('@elementFactory').then(function (ele) {
      const swapPage = new SwapPage(ele)
      swapPage.go()
      .swapToken("0.001","","","",false)
    })
  })

  using (testData1[Cypress.env().networkType], function(data, description) {
		it(`Swap Feature - ${description}`, function(){
			cy.get('@elementFactory').then(function (ele) {
				const swapPage = new SwapPage(ele)
				swapPage.go()
       // swapPage.switchNetworkByUrl(data.chainID,data.networkName)
        //swapPage.changeSettings('10')
        //swapPage.swapToken(data.swapIn, data.swapOut, data.fromToken, data.toToken)
			})
		})
	})
	
})
