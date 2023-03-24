/* t he  p R  o b L E  M

Task
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

The first mission: Traversing arr, find the shortest string length.

The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.

for example:

cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","ja


 Solution */

 on
1
function cutIt(arr){
2
  //coding here...
3
  
4
 let shortest = arr[0].length;
5
  for (let i = 1; i < arr.length; i++) {
6
    if (arr[i].length < shortest) {
7
      shortest = arr[i].length;
8
    }
9
  }
10
  
11
  // Step 2: Slice all strings to shortest length
12
  let result = [];
13
  for (let i = 0; i < arr.length; i++) {
14
    result.push(arr[i].slice(0, shortest));
15
  }
16
  
17
  return result;
18
}