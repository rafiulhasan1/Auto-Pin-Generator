
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