// Handling Alert Js 
// @url https://the-internet.herokuapp.com/javascript_alerts

const { functions } = require("lodash");

describe('handling alert', function (){

    beforeEach(function() {
        cy.visit ('https://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Verify System show JS Alert', function(){

        cy.on('window:alert', function(alertText){
            expect(alertText).eq('I am a JS Alert')
        })
        cy.contains('Click for JS Alert').click()
    })

    it ('Verify System show Result "You clicked: Ok" when Click OK on JS Confirm ', function(){
        cy.on('window:confirm', function(confirmText){
            return false
        })
        cy.contains('Click for JS Confirm').click()
    })
    
    it ('Verify User can Input JS Prompt', function(){
        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('rifqi')
            cy.contains('Click for JS Confirm').click()
        })
    }
    )
})