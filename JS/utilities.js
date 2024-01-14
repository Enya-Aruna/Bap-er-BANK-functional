function getInputFeildValueById(inputFeildId){
    const inputFeild = document.getElementById(inputFeildId) ;
    const inputFeildValueAmmountString = inputFeild.value ;
    const inputFeildValueAmmount = parseFloat(inputFeildValueAmmountString) ;
     inputFeild.value = '' ;
     return inputFeildValueAmmount  ;
     }
    
function getTextElementValuById(elementId){
        const textElement = document.getElementById(elementId) ;
        const textElementValueString =textElement.innerText ;
        const elementValue = parseFloat(textElementValueString ) ;
        return elementValue ;
    }
    
function setTextElementValueById(elementId , newValue){
        const elementValue = document.getElementById(elementId);
        elementValue.innerText = newValue ;
    }