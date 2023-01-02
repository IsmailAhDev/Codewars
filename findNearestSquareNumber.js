/*

Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

Goodluck :)

Check my other katas:

*/


//my solution


function nearestSq(n){
   
    // Find the square root of n
    const sqrtn = Math.sqrt(n);
  
    // Find the nearest integer to the square root of n
    const nearestInt = Math.round(sqrtn);
  
    // Find the nearest square number by squaring the nearest integer
    const nearestSq = nearestInt ** 2;
  
    return nearestSq;
  }