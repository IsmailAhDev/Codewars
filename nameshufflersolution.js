/*

Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

//my solution




function nameShuffler(str){
  //Shuffle It
  let names = str.split(" ");
   return names[1] + " " + names[0];
}