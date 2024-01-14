    
    document.getElementById('btn-deposit').addEventListener('click' , function(){
        
    const newDepositAmmount = getInputFeildValueById('deposit-feild');
    const previousDepositTotal = getTextElementValuById('deposit-total')
      
        //calculate new deposit total
        const newDepositTotal =   previousDepositTotal + newDepositAmmount ;
        setTextElementValueById('deposit-total' , newDepositTotal)

        const previousBalanceTotal = getTextElementValuById('balance-total') ;
        const newBalanceTotal = previousBalanceTotal + newDepositTotal ;
        setTextElementValueById('balance-total' , newBalanceTotal)
    })