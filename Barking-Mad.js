/*                   T H E P R O B L E M



                      T H E S O L U T I O N */


                      function Dog(breed) {
                        this.breed = breed;
                      }
                      
                      Dog.prototype.bark = function() {
                        return "Woof";
                      };
                      
                      var snoopy = new Dog("Beagle");
                      var scoobydoo = new Dog("Great Dane");