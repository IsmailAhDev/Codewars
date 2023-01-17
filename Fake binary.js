/* The problem */

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

/*   My solution     */


function fakeBin(x){
    let bin = '';
        for(const char of x){
          if(parseInt(char) < 5){
           bin += '0';
          }else
            bin +='1';
        }
          
      return bin
    }