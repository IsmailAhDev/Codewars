/*

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that


*/


//my solution




let catYears = 15;
  let dogYears = 15;

  // For the second year, add 9 cat years and 9 dog years to their ages.
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }

  // For each year after the second year, add 4 cat years and 5 dog years
  // to their ages.
  if (humanYears > 2) {
    catYears += 4 * (humanYears - 2);
    dogYears += 5 * (humanYears - 2);
  }

  // Return an array with the humanYears, catYears, and dogYears in that order.
  return [humanYears, catYears, dogYears];