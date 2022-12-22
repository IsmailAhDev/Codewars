/*


Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.





*/


//my solution




const findAverage = array => array.length == 0 ? 0 : array.reduce((prev,curr) => prev + curr) / array.length