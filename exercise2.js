function reverseNumber(){
    x = prompt('enter a valid number')
    k = x.toString().length;
    let remainder= 0 ;
    let reverse = 0;
    let j = 0 ;
    let sum = 0;
    while ( j < k){
     sum = x % 10 ;
     for (let i = 0 ; i < x.toString().length - 1; i++){
        sum = sum*10;     
     }   
     x = Math.floor(x/10);
     k--;
     reverse+= sum;   
   }
  
 window.alert(`the reverse number is : ${reverse}`);
}


function palindrome(){
    //   const x = prompt('enter a word for checkup');
  const x = window.prompt("enter a word for checkup"); 
  let palindrome = '';
 for(let i = x.length-1 ;i >= 0 ; i--){
      let y = x.charAt(i);
      palindrome = palindrome.concat(y) ;
   } 
   if (x == palindrome){
       window.alert("palindrome"); 
   }
   else{
       window.alert('not palindrome')
   }
   

}
