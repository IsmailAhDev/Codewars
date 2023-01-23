/* the problem


Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

Make sure that your function does not return a false positive by only checking the day.






the solution */





function isToday(date) {
    //Code goes here.
  
   const today = new Date();
    return date.toDateString() === today.toDateString();
    
    
  }
  