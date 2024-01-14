function calculate1(){
    
    let c = nu.value;
   let a = ((c*9)/5)+32;  
 agetext.innerHTML = "celsius to fahrenheit:- " + c + "°C is equal to " + a + "°F " ;
} 

function calculate2(){
    
    let c = nu.value;
   let a = (c-32)*(5/9);
 agetext.innerHTML = "fahrenheit to celsius:- " + c + "°F is equal to " + a + "°C " ;
} 