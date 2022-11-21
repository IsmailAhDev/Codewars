// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// my solution



function sumArray(array) {
    if (!Array.isArray(array)) return 0
   return array
       .sort((a,b) => a - b)
       .slice(1, array.length - 1)
       .reduce((a, b) => a + b, 0)
   }