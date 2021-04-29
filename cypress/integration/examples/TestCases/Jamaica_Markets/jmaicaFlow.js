import baseClass from './../../PageObjectModel/Jamaica_Files/baseClass';
//import baseClass from './../../PageObjectModel/Jamaica_Files/baseClass';
describe('Jamaica_Do_It', function() {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })

      before("Validate",function () {
        cy.fixture('baseUrl').then((data) => {
            this.data = data
        })
        cy.fixture('inputData').then((user) => {
            this.user = user
        })
    })
    
    it.skip('Buy_Do_It', function() {
   
        cy.viewport(1366, 600)
        const common =new baseClass()
        cy.visit(this.data.s1.Jmaica);
        common.postpaidPlanSelection(this.user.do_it);


cy.get('.col-sm-3:nth-child(1) .ctabox-wantbtn--js > .btn').click();
cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/mobilePlan');
cy.get('.col-sm-4:nth-child(1) .ctabox-wantbtn--js > .btn').click();
cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/mobilePlan');
cy.get('.col-sm-2:nth-child(3) #addToCartButton').click();
//cy.get('.col-sm-2:nth-child(3) > #command').submit();
cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/cart');
cy.get('.radio-inline:nth-child(3) > label').click();
cy.get('.col-sm-6 > .btn-primary').click();
cy.get('.btn--continue-checkout').click({force:true});
cy.get('#guestEmail').type('chewale.vishnupant@in.ey.com',{force:true});
cy.get('.guestCheckoutButton').click({force:true});
cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/checkout/multi/installation-address/add');

cy.get('#i18nAddressForm').contains('Phone number*').type('(879)372-8923');

cy.get('#i18nAddressForm').contains('First Name*').type('Ganesh');

cy.get('#i18nAddressForm').contains('Last Name*').type('Chewale');

cy.get('#i18nAddressForm').contains('House/Apartment Number*').type('2134');

cy.get('#i18nAddressForm').contains('Street Name*').type('Jamaica');

// cy.get('#i18nAddressForm').contains('Area/Parish*').select('Portland').should('have.value','portland')
cy.get("[id='address.area']").select('Portland');

cy.get('#i18nAddressForm').contains('Town/City*').type('Devid');

cy.get('#i18nAddressForm').contains('TRN Code*').type('233-432-432');

cy.get('#i18nAddressForm').contains('Date Of Birth*').type('01-07-1995');

cy.get('#i18nAddressForm').contains('Alternative Contact Number').type('(789)364-3344');
cy.get('#addressSubmit').click();
cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/checkout/multi/payment-method/add');

//cy.get('#silentOrderPostForm').contains('Card type').click().type('Visa');
cy.get('#card_cardType').select('Mastercard').should('have.value','002')
cy.get('#silentOrderPostForm').contains('Name on card').type('ganesh v chewale');
cy.get('#silentOrderPostForm').contains('Card number').type('4545565787658907');

cy.get("[name='card_expirationMonth']").select('02').should('have.value','02');
cy.get("[name='card_expirationYear']").select('2030').should('have.value','2030');

cy.get('#silentOrderPostForm').contains('Card Verification Number').type('111');

cy.get('.checkout-paymentmethod > .btn').click();

cy.get('#Terms1').click();
cy.get('#Terms2').click();
cy.get('#placeOrder').click();

    })
})