/* the problem


Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

Upper or lower case letter does not matter -- "eNglisH" is also correct.

Return value as boolean values, true for the string to contains "English", false for it does not.


 the solution */

 function spEng(sentence){
    //write your code here
      
        let lowerCaseStr = sentence.toLowerCase();
      let word = "english";
      let wordIndex = lowerCaseStr.indexOf(word);
      if (wordIndex !== -1) {
        if (
          (wordIndex === 0 || !/^[a-z]$/i.test(lowerCaseStr[wordIndex - 1])) &&
          (wordIndex + word.length === lowerCaseStr.length ||
            !/^[a-z]$/i.test(lowerCaseStr[wordIndex + word.length]))
        ) {
          return true;
        }
      }
      return false;
      
    }