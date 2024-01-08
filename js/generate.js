
function pin(){
    const randomPin = Math.round(Math.random()*10000)
    if(randomPin>=1000){
        return randomPin;
    }
    else{
       return pin();
    }
}



document.getElementById('generate-pin').addEventListener('click',function(){
    const generate = pin();
    // console.log(generate);
    const pinFrom = document.getElementById('pin-from');
    pinFrom.value = generate;
    //pin-from
})

const numberField = document.getElementById('numbers-field');


document.getElementById('calculator').addEventListener('click',function(event){
    const calculatorNumber = event.target.innerText;
    const stringCalculatorNumber = numberField.value;
    const totalNumber = stringCalculatorNumber+calculatorNumber;
    if(isNaN(calculatorNumber)){
        if(calculatorNumber === 'C'){
            numberField.value = '';
        }
        else if(calculatorNumber === '<'){
            const digit = stringCalculatorNumber.split('');
            digit.pop();
            const remainingDigits = digit.join('');
            numberField.value = remainingDigits;
        }
        else if(calculatorNumber === 'Submit'){
            
        }
    }
    else{
        numberField.value = totalNumber;
    }
    
})