const display=document.getElementById('display')

function appendtoDisplay(input){
    display.value+=input

}

function clearDisplay(input){
    display.value=""

}
function equalTo(input){
    try{
        display.value=eval(display.value)

    }
    catch(err){
        display.value="Error"
    }
    

}
