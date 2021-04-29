import validation_Method from '../../PageObjectModel/Jamaica_Files/validation_Method';
import baseclass from './../../PageObjectModel/Jamaica_Files/baseclass';
describe('Jamaica_Do_It_Unlimited', function() {

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
    it('Buy_Do_It_Unlimited', function() {
   
        cy.viewport(1366, 600)
        const common =new baseclass()
        const verify=new validation_Method()
        cy.visit(this.data.s1.Jmaica);
        
// Vallidation on URL/Header/Tittle
        common.validationL_T_H();

// DO IT PLAN VALIDATION & Select
        for(var i = 0;i<this.user.plan.Do_It_Text.length;i++)
        {
        verify.doitPlanValidation(this.user.plan.Do_It_Text[i])  
        } 
        common.postpaidPlanSelection(this.user.plan.DO_IT);
       
// SELECTED PLAN VALIDATION
        verify.selectedPlanValidation(this.user.plan.Do_It_Text[0],this.user.Price.DO_IT)   

// EIGHT GB PLAN VALIDATION & Select
        for(var i = 0;i<this.user.plan.Unlimited_Text.length;i++)
        {
        verify.unlimited_PlanValidation(this.user.plan.Unlimited_Text[i])  
        } 
        common.mobilePlanSelection(this.user.plan.Unlimited);

// SELECTED PLAN VALIDATION
        verify.selectedPlanValidation(this.user.plan.Do_It_Text[0],this.user.Price.DO_IT) 
        common.addToCart();

// VALIDATION ON SELECTED PLAN AND CHECK-OUT
        for(var i = 0;i<this.user.checkout.Do_It_Text.length;i++)
        {
        verify.check_outPagePlanFirst(this.user.checkout.Do_It_Text[i])  
        } 

        for(var i = 0;i<this.user.checkout.Unlimited_Text.length;i++)
        {
        verify.check_outPagePlanSecond(this.user.checkout.Unlimited_Text[i])  
        } 
        common.checkOutPage();
// VALIDATE BUTTON TEXT AND ENTER MAIL        
        common.guestCheckOut(this.data.userData.username);

// VALIDATION ON PLAN PRICE AND ENTER A DATA
        for(var i = 0;i<this.user.unlimited_sum_price.DO_IT.length;i++)
        {
                verify.monthlyPlanVlaidation(this.user.unlimited_sum_price.DO_IT[i])
        }

        for(var i = 0;i<this.user.unlimited_sum_price.TODAY_PAY.length;i++)
        {
                verify.toDayPlanVlaidation(this.user.unlimited_sum_price.TODAY_PAY[i])
        }
        common.addressDetails();

 // VALIDATION ON PLAN PRICE AND ENTER KARD DETAILS

 for(var i = 0;i<this.user.unlimited_sum_price.DO_IT.length;i++)
 {
         verify.cared_Deatails_MonthlyPlanVlaidation(this.user.unlimited_sum_price.DO_IT[i])
 }

 for(var i = 0;i<this.user.unlimited_sum_price.TODAY_PAY.length;i++)
 {
         verify.cared_Deatails_ToDayPlanVlaidation(this.user.unlimited_sum_price.TODAY_PAY[i])
 }
        common.cardDetails();
//VALIDATION ON PLACE ORDER PAGE    
for(var i = 0;i<this.user.unlimited_sum_price.DO_IT.length;i++)
 {
         verify.place_Order_MonthlyPlanVlaidation(this.user.unlimited_sum_price.DO_IT[i])
 }

 for(var i = 0;i<this.user.unlimited_sum_price.TODAY_PAY.length;i++)
 {
         verify.place_Order_ToDayPlanVlaidation(this.user.unlimited_sum_price.TODAY_PAY[i])
 }     
        common.placeOrder();

        for(var i = 0;i<this.user.unlimited_sum_price.DO_IT.length;i++)
 {
         verify.place_Order_MonthlyPlanVlaidation(this.user.unlimited_sum_price.DO_IT[i])
 }

 for(var i = 0;i<this.user.unlimited_sum_price.TODAY_PAY.length;i++)
 {
         verify.place_Order_ToDayPlanVlaidation(this.user.unlimited_sum_price.TODAY_PAY[i])
 }  
       


    })
})