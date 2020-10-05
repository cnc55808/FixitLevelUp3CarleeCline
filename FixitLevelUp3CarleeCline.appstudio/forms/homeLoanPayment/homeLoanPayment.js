homeLoanPayment.onshow=function(){
 NSB.MsgBox("Please enter the requested information:"); 
 }
 
 let homePrincipalValue = ""
 let homeMonthlyInterestValue = ""
 let homeTotalMonthsValue = ""

 submitHome.onclick=function(){
 homePrincipalValue = homePrincipalAmount.value
 homeMonthlyInterestValue = homeMonthlyInterest.value
 homeTotalMonthsValue = homeTotalMonths.value
 let totalHomePayment = homePrincipalValue*(homeMonthlyInterestValue*((1+homeMonthlyInterestValue)**homeTotalMonthsValue))/(((1+homeMonthlyInterestValue)**homeTotalMonthsValue)-1)
 homeLabel.value = "Your home payment is " + totalHomePayment
 }   
 
leaveButton.onclick=function(){
  ChangeForm(homePage)
}
