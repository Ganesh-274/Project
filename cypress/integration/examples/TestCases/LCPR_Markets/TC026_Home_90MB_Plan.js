
// LCPR Scenario 2 >>90MB + Mobile PLan
import base_Common_Function from './../../PageObjectModel/LCPR_Files/base_Common_Function';

describe('test_name', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })

  before("Validate",function () {
          cy.fixture('baseUrl').then((data) => {
              this.data = data
              // Open Url and Click on Banner              
          })
      })
   it('LCPR_90MB_Telephone_Plan', function() {

    cy.viewport(1366, 600)
    const common=new base_Common_Function();
    cy.visit(this.data.s1.LCPR);

    cy.get('#command > .btn')
    .each(($el, index)=>{
        if (index==1) {
           $el.click();
        }
    })


// Vallidation on Total and click on Place order
   common.checkOut();

// geustCheckout Enter Details
   common.guestCheck(this.data.userData.username);

// Enter Address 
   common.addressEnter();

// Personal Information
   common.personalInfoEnter();

// Contract Selection
   common.contractSelection();

// Place Order Page (Confirmation)
  // common.placeOrder();
   cy.screenshot();
})
})
