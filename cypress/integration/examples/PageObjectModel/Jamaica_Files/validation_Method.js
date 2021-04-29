class validation_Method
{
      validationL_T_H(){
        cy.url().should('contains', 'https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/configureProduct/selectDoItBundle');
        cy.title().should('include', 'Jamaica Site')
        cy.get("[class='col-xs-12 col-sm-10']").should('contains.text',' Welcome!Choose a "Do it" bundle and Get 50% OFF on your Postpaid mobile plan')
        }

        selectedPlanValidation(plan,price)
        {
            cy.get('.col-xs-12 > span:nth-child(2)').should('have.text',plan)
            cy.get('.col-xs-12 > span:nth-child(3)').should('have.text',price)
    
        }
       
        doitPlanValidation(plan){
          cy.get('.ctabox-container > .col-sm-3:nth-child(1)')
            .each(($el, index,) => {
               //  cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            // if($el.text() == 'Select'){
            //     cy.wrap($el).click()
            // }
           });
        }
        doitNowPlanValidation(plan){
            cy.get('.ctabox-container > .col-sm-3:nth-child(2)')
            .each(($el, index,) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
           
           });
        }
        doitMorePlanValidation(plan){
            cy.get('.ctabox-container > .col-sm-3:nth-child(3)')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
           
           });
        }
        doitAllPlanValidation(plan){
            cy.get('.ctabox-container > .col-sm-3:nth-child(4)')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        eightGB_PlanValidation(plan){
            cy.get('.col-sm-4:nth-child(1)')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        unlimited_PlanValidation(plan){
            cy.get('.col-sm-4:nth-child(2)')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        check_outPagePlanFirst(plan){
            cy.get('body > main > div.main__inner-wrapper > div.container > div:nth-child(3) > div:nth-child(1) > div > div.cart-body > ul > table:nth-child(1) > tbody > tr > td > li')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }
        check_outPagePlanSecond(plan){
            cy.get('body > main > div.main__inner-wrapper > div.container > div:nth-child(3) > div:nth-child(1) > div > div.cart-body > ul > table:nth-child(3) > tbody > tr > td > li')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }
      
        monthlyPlanVlaidation(plan){
            cy.get('.monthly-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        toDayPlanVlaidation(plan){
            cy.get('.today-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }


        cared_Deatails_MonthlyPlanVlaidation(plan){
            cy.get('.monthly-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        cared_Deatails_ToDayPlanVlaidation(plan){
            cy.get('.today-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        place_Order_MonthlyPlanVlaidation(plan){
            cy.get('.monthly-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

        place_Order_ToDayPlanVlaidation(plan){
            cy.get('.today-details')
            .each(($el, index, ) => {
                // cy.log($el.text())
                // cy.log($listOfElement)
            expect($el).to.contain(plan)
            
           
           });
        }

}
export default validation_Method
/*
  //  cy.get('body > main > div.main__inner-wrapper > div.configurator-body > div.container > div.ctabox-container > div:nth-child(1) > div')
  cy.get("[class='col-sm-3']")
  .each(($el, index, $listOfElement) => {
      if($el.text() == 'Do It'){
          cy.wrap($el).click()

      cy.log($el.text())
  }
      // cy.log($listOfElement)
 // expect($el).to.contain(this.user.Do_It_Text.length[index])
 
 });
 cy.visit('https://jamaica.cdoj51jxo6-lilacserv1-s1-public.model-t.cc.commerce.ondemand.com/jamaicastorefront/jamaica/en/checkout/multi/installation-address/add');
cy.get('.monthly-details').click();
cy.get('.today-details').click();


 body > main > div.main__inner-wrapper > div > div > div.col-sm-6.hidden-xs > div.checkout-order-summary.monthly-details

  for(var i = 0;i<this.user.sum_price.DO_IT.length;i++)
        {
                verify.monthlyPlanVlaidation(this.user.sum_price.DO_IT[i])
        }

        for(var i = 0;i<this.user.sum_price.TODAY_PAY.length;i++)
        {
                verify.toDayPlanVlaidation(this.user.sum_price.TODAY_PAY[i])
        }
        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
        common.addressDetails();
 */