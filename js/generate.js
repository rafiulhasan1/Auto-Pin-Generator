
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
        
    }
    else{
        numberField.value = totalNumber;
    }
    
})

document.getElementById('btn-submit').addEventListener('click',function(){
    const pinFiled = document.getElementById('pin-from');
    const pinMatchFaild = pinFiled.value;

    const pinFiled1 = document.getElementById('numbers-field');
    const pinMatchFaild1 = pinFiled1.value;

    const pinmatch1 = document.getElementById('wrong-pin');
    const pinmatch = document.getElementById('pin-matched');

    if(pinMatchFaild === pinMatchFaild1){
        pinmatch.style.display = 'block';
        pinmatch1.style.display = 'none';
    }
    else{
        pinmatch1.style.display = 'block';
        pinmatch.style.display = 'none';
    }
})