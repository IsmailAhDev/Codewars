/*Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

*/





//my    solution 

function sumMix(x){

  
    return x.reduce((acc, x) => acc  + parseInt(x), 0);
    }

