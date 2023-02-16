/* the problem


Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False
Input
an array of Boolean values (1 <= array_length <= 50)
a string specifying a logical operator: "AND", "OR", "XOR"
Output
A Boolean value (True or False).



 the solution */



 function logicalCalc(array, op){
    //your code here
        let result = array[0];
  
    // Loop through the remaining elements in the array
    for (let i = 1; i < array.length; i++) {
      // Apply the logical operator to the current element and the result so far
      switch (op) {
        case "AND":
          result = result && array[i];
          break;
        case "OR":
          result = result || array[i];
          break;
        case "XOR":
          result = result !== array[i];
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
  
    // Return the final result
    return result;
  }