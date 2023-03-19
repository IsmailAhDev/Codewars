/*                    


What kind of tests we made for your code:

Function have to count words and not spaces. You have to be sure that you doing it right
Empty string has no words.
String with spaces around should be trimmed.
Non-whitespace (ex. breakspace, unicode chars) should be treated as a delimiter
Doublecheck that words with chars like -, ', ` are counted right.


*/



function countWords(str) {
    // ...
    //trim the string to remove any leading or trailing spaces
    str = str.trim();
    //replace any non-word characters with spaces
    str = str.replace(/[\W_]+/g," ");
    //split the string into words based on spaces
    var words = str.split(" ");
    //filter out any empty words
    words = words.filter(function(word){
      return word.length > 0;
    });
    //return the length of the words array
    return words.length;
  }