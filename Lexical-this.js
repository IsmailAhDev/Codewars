/*                  THE PROBLEM 
                         
                       Lexical this
Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.
Output
Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.
Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions



                     

                           TH  E  S O L  U T I  O N*/



                           var Person = function(){
                            var person = {
                              _name: "Leroy",
                              _friends: [],
                              fillFriends(friends) {
                                this._friends = friends;
                              }
                            }
                            return person;
                          }
                          
                          var leroy = Person();
                          leroy.fillFriends(["John", "Mary", "Sam"]);
                          console.log(leroy._name); // "Leroy"
                          console.log(leroy._friends); // ["John", "Mary", "Sam"]
                          