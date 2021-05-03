class LCPR_Common_Functio
{

      checkOut(){
         // Click on Checkout Page
         cy.get('.yCmsComponent > .cart__actions > .row > .col-sm-12 > .btn').should('be.visible').click()
      }

      guestCheck(username){
          // Guest Checkout
        cy.get(' #guestEmail').type(username)
        cy.get('.guestCheckoutButton').click()
      }

      addressEnter()
      {
          // Address Enter
    cy.get('#i18nAddressForm').contains('Dirección Línea 1').type('test 11')
    cy.get('#i18nAddressForm').contains('Dirección Línea 2').type('test 12')
    cy.get('#i18nAddressForm').contains('Ciudad').type('panama1')
    cy.get('#i18nAddressForm').contains('Código postal').type('11111')
    cy.get('.col-sm-6 > .checkout-steps > .step-body > .checkout-shipping > #addressSubmit').should('be.visible').click()
    
      }
      personalInfoEnter()
      {
           //Personal Onfo
           cy.get('#customerProfileForm').contains('Nombre').type('QA Team')
           cy.get('#customerProfileForm').contains('Apellidos').type('QA')
           cy.get('#customerProfileForm').contains('Fecha de Nacimiento').type('01071995')
           cy.get('#customerProfileForm').contains("Tipo de Identificación").click({force: true});
           cy.get('#customerProfileForm').contains('Número de Identificación').type('A01478596')
           cy.get('#customerProfileForm').contains('Teléfono').type('7884592158')
           cy.get('.checkout-steps > .step-body > .customer-additional-details > #customerProfileForm > .btn').should('be.visible').click()
      }
contractSelection(){
 // Contract Click
 cy.get('.form-group > #contractType > #contractType > li:nth-child(2) > label').click()
 cy.get('.checkout-steps > .step-body > .customer-additional-details > #contractTypeForm > .btn').should('be.visible').click()


}

placeOrder(){
// Checkout page
cy.get('.place-order-form > #placeOrderForm1 > .checkbox > label > #Terms1').click()
cy.get('.place-order-form > #placeOrderForm1 > .checkbox > label > #Terms1').check('true')
cy.get('.place-order-form > #placeOrderForm1 > .checkbox > label > #Terms2').click()
cy.get('.place-order-form > #placeOrderForm1 > .checkbox > label > #Terms2').check('true')
cy.get('.row > .col-sm-6 > .place-order-form > #placeOrderForm1 > #placeOrder').click()
}    


}
export default LCPR_Common_Functio;