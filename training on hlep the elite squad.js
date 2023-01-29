/* the problem 

The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.



the solution */




function magNumber(info){
    let weapon = info[0];
      let streets = info[1];
      let bulletsPerStreet = 3;
      let bulletsPerWeapon;
    
      switch (weapon) {
        case "PT92":
          bulletsPerWeapon = 17;
          break;
        case "M4A1":
          bulletsPerWeapon = 30;
          break;
        case "M16A2":
          bulletsPerWeapon = 30;
          break;
        case "PSG1":
          bulletsPerWeapon = 5;
          break;
        default:
          return 0;
      }
    
      return Math.ceil(streets * bulletsPerStreet / bulletsPerWeapon);
    }
    