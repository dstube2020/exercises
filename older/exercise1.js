
//QUESTION NUMBER ONE

function addTwoNumbers(firstNumber, secondNumber){
    let result = 0 ;
    if (firstNumber == secondNumber){
         result = 3*(firstNumber + secondNumber);
    }
    else{
         result = firstNumber + secondNumber
    }
return result;

}
const sum = addTwoNumbers(12,13);
console.log(sum);

// QUESTION NUMBER TWO

function checkTwoNumbers(firstNumber, secondNumber){
    let result = false  ;
    if (firstNumber == 50 || (firstNumber,secondNumber == 50 )){
         result = true ;
    }
    return result;

}
  
const check = checkTwoNumbers(10,40);
console.log(check);


//QUESTION NUMBER THREE
function addPy(Py){
    let check = 'Py';   
   if( Py[0] == check[0] && Py[1] == check[1]){
     return Py;
    }
    else if( Py[0] == check[1]){
      Py = check[0].concat(Py); 
       return Py; 
     }
    else{
        Py = check.concat(Py);
        return Py;
    }


}
const checkPy = addPy("yssnpps");
console.log(checkPy);

//QUESTION NUMBER FOUR
function removeChar(str ,index){
    let newStr1 = str.slice(0,index);
    let newStr2 = str.slice(index + 1,);
    newStr1 [index]= '';
    newStr1 = newStr1.trim();
    str = newStr1 + newStr2 ;
     return str ;
  }
const checkRemoveChar = removeChar('simondns',3);
console.log(checkRemoveChar);

//QUESTION NUMBER FIVE

function checkMultiple5Or7(check){
    if (check <= 0){
           let message = 'please enter valid number';
           return message;
           
     }
     if ( check % 5 == 0 || check % 7 == 0 ){
         return true
     }
     else{
         return false;
     }
     }
const checkMultiple = checkMultiple5Or7(0);
console.log(checkMultiple);

















