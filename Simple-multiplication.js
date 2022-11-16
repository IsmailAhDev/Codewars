// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


//my solutions function simpleMultiplication(number) {
 




if (number % 2 === 0){
    number = number * 8;
 }else {
   number = number * 9;
 }
  return number

  function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
   }





   function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
   }