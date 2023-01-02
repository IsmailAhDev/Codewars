/*



Complete the solution so that it reverses all of the words within the string passed in.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"


*/




//my solution



function reverseWords(str){
    const words = str.split(' ');
  
    // reverse the array of words
    words.reverse();
  
    // join the array of words into a string
    return words.join(' ');
  }