import validation_Method from '../../PageObjectModel/Jamaica_Files/validation_Method';
import baseclass from './../../PageObjectModel/Jamaica_Files/baseclass';
describe('Jamaica_Do_It_All', function() {

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
    it('Buy_Do_It_All', function() {
   
        cy.viewport(1366, 600)
        const common =new baseclass()
        const verify=new validation_Method()
        cy.visit(this.data.s1.Jmaica);
        
// Vallidation on URL/Header/Tittle
        common.validationL_T_H();

// DO IT PLAN VALIDATION & Select
        for(var i = 0;i<this.user.plan.Do_All_Text.length;i++)
        {
        verify.doitAllPlanValidation(this.user.plan.Do_All_Text[i])  
        } 
        common.postpaidPlanSelection(this.user.plan.DO_IT_ALL);
       
// SELECTED PLAN VALIDATION
        verify.selectedPlanValidation(this.user.plan.Do_All_Text[0],this.user.Price.DO_IT_ALL)   

// EIGHT GB PLAN VALIDATION & Select
        for(var i = 0;i<this.user.plan.Eight_GB_Text.length;i++)
        {
        verify.eightGB_PlanValidation(this.user.plan.Eight_GB_Text[i])  
        } 
        common.mobilePlanSelection(this.user.plan.eight_GB);

// SELECTED PLAN VALIDATION
        verify.selectedPlanValidation(this.user.plan.Do_All_Text[0],this.user.Price.DO_IT_ALL) 
        common.addToCart();

// VALIDATION ON SELECTED PLAN AND CHECK-OUT
        for(var i = 0;i<this.user.checkout.Do_All_Text.length;i++)
        {
        verify.check_outPagePlanFirst(this.user.checkout.Do_All_Text[i])  
        } 

        for(var i = 0;i<this.user.checkout.Eight_GB_Text.length;i++)
        {
        verify.check_outPagePlanSecond(this.user.checkout.Eight_GB_Text[i])  
        } 
        common.checkOutPage();
// VALIDATE BUTTON TEXT AND ENTER MAIL        
        common.guestCheckOut(this.data.userData.username);

// VALIDATION ON PLAN PRICE AND ENTER A DATA
        for(var i = 0;i<this.user.sum_price.DO_IT_ALL.length;i++)
        {
                verify.monthlyPlanVlaidation(this.user.sum_price.DO_IT_ALL[i])
        }

        for(var i = 0;i<this.user.sum_price.TODAY_PAY.length;i++)
        {
                verify.toDayPlanVlaidation(this.user.sum_price.TODAY_PAY[i])
        }
        common.addressDetails();

 // VALIDATION ON PLAN PRICE AND ENTER KARD DETAILS

 for(var i = 0;i<this.user.sum_price.DO_IT_ALL.length;i++)
 {
         verify.cared_Deatails_MonthlyPlanVlaidation(this.user.sum_price.DO_IT_ALL[i])
 }

 for(var i = 0;i<this.user.sum_price.TODAY_PAY.length;i++)
 {
         verify.cared_Deatails_ToDayPlanVlaidation(this.user.sum_price.TODAY_PAY[i])
 }
        common.cardDetails();
        
// VALIDATION ON PLACEORDER 

for(var i = 0;i<this.user.sum_price.DO_IT_ALL.length;i++)
 {
         verify.place_Order_MonthlyPlanVlaidation(this.user.sum_price.DO_IT_ALL[i])
 }

 for(var i = 0;i<this.user.sum_price.TODAY_PAY.length;i++)
 {
         verify.place_Order_ToDayPlanVlaidation(this.user.sum_price.TODAY_PAY[i])
 }
        common.placeOrder();
       
        for(var i = 0;i<this.user.sum_price.DO_IT_ALL.length;i++)
        {
            verify.place_Order_MonthlyPlanVlaidation(this.user.sum_price.DO_IT_ALL[i])
        }
       
        for(var i = 0;i<this.user.sum_price.TODAY_PAY.length;i++)
        {
            verify.place_Order_ToDayPlanVlaidation(this.user.sum_price.TODAY_PAY[i])
        }

    })
})