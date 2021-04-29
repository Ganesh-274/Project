class baseclass
{
      validationL_T_H(){
        cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/selectDoItBundle');
        cy.title().should('include', 'Jamaica Site')
        cy.get("[class='col-xs-12 col-sm-10']").should('contains.text',' Welcome!Choose a "Do it" bundle and Get 50% OFF on your Postpaid mobile plan')
        }
    


    postpaidPlanSelection(value){
        cy.get('#command > div.ctabox-btn.ctabox-wantbtn--js > button').should('contain.text','Select')
        .each(($el, index)=>{
            if (index==value) {
              cy.log(index)
               $el.trigger("click");
            }
          //   else{}
        })
    }

    mobilePlanSelection(plan){
        //cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/mobilePlan');
        cy.get('#command > div.ctabox-btn.ctabox-wantbtn--js > button').should('contain.text','Select')
        .each(($el, index)=>{
            if (index==plan) {
               $el.trigger("click");
            }
          //   else{}
        })
    }

    addToCart(){
    //cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/mobilePlan');
    cy.get('.col-sm-2:nth-child(3) > #command').should('contains.text','Add to Cart').submit();
    }

    checkOutPage()
    {
    cy.get('.radio-inline:nth-child(3) > label').click()//.should('be.checked');
    cy.get('.col-sm-6 > .btn-primary').should('contains.text',' Proceed To Checkout').click({force:true});
    }

    guestCheckOut(email){
    cy.get('#guestEmail').type(email,{force:true});
    cy.get('.guestCheckoutButton').should('have.text','GO').click({force:true});
    }

    addressDetails(){
    cy.get('#i18nAddressForm').contains('Phone Number*').type('(879)372-8923');
    cy.get('#i18nAddressForm').contains('First Name*').type('Ganesh');
    cy.get('#i18nAddressForm').contains('Last Name*').type('Chewale');
    cy.get('#i18nAddressForm').contains('House/Apartment Number*').type('2134');
    cy.get('#i18nAddressForm').contains('Street Name*').type('Jamaica');
    cy.get("[id='address.area']").select('Portland');
    cy.get('#i18nAddressForm').contains('Town/City*').type('Devid');
    cy.get('#i18nAddressForm').contains('TRN Code*').type('233-432-432');
    cy.get('#i18nAddressForm').contains('Date Of Birth*').type('01-07-1995');
    cy.get('#i18nAddressForm').contains('Alternative Contact Number').type('(789)364-3344');
    cy.get('#addressSubmit').click();
    }

    cardDetails(){
    cy.get('#card_cardType').select('Mastercard').should('have.value','002')
    cy.get('#silentOrderPostForm').contains('Name on card').type('ganesh v chewale');
    cy.get('#silentOrderPostForm').contains('Card number').type('4545565787658907');
    cy.get("[name='card_expirationMonth']").select('02').should('have.value','02');
    cy.get("[name='card_expirationYear']").select('2030').should('have.value','2030');
    cy.get('#silentOrderPostForm').contains('Card Verification Number').type('111');
    cy.get('.checkout-paymentmethod > .btn').click();
    }

    placeOrder(){
    cy.get('#Terms1').click().check().should('be.checked');
    cy.get('#Terms2').click().check().should('be.checked');
    cy.get('#placeOrder').click();
    }

}
export default baseclass