// Add event Handler....>
document.getElementById('btn-withdraw').addEventListener('click' , function(){
   
    const newWithdrawAmmount = getInputFeildValueById('withdraw-feild') ;
    const previousWithdrawTotal = getTextElementValuById('Withdraw-total')
   
    const newWithdrawTotal  =  newWithdrawAmmount + previousWithdrawTotal ;
    setTextElementValueById('Withdraw-total' ,  newWithdrawTotal)
    const previousBalanceTotal = getTextElementValuById('balance-total' ) ;
    const newBalanceTotal = previousBalanceTotal - newWithdrawTotal ;
    setTextElementValueById('balance-total' ,  newBalanceTotal)
})