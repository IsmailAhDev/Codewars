/* the problem


Given the molecular mass of two molecules 
�
1
M 
1
​
  and 
�
2
M 
2
​
 , their masses present 
�
1
m 
1
​
  and 
�
2
m 
2
​
  in a vessel of volume 
�
V at a specific temperature 
�
T, find the total pressure 
�
�
�
�
�
�
P 
total
​
  exerted by the molecules. Formula to calculate the pressure is:

�
�
�
�
�
�
=
(
�
1
�
1
+
�
2
�
2
)
�
�
�
P 
total
​
 = 
V
( 
M 
1
​
 
m 
1
​
 
​
 + 
M 
2
​
 
m 
2
​
 
​
 )RT
​
 
Input
Six values :

�
1
M 
1
​
 , 
�
2
M 
2
​
 : molar masses of both gases, in grams (
�
g)
�
1
m 
1
​
  and 
�
2
m 
2
​
 : present mass of both gases, in 
 
�
⋅
�
�
�
−
1
 g⋅mol 
−1
 
�
V: volume of the vessel, in 
 
�
�
3
 dm 
3
 
�
T: temperature, in 
 
°
�
 °C
Output
One value: 
�
�
�
�
�
�
P 
total
​
 , in units of 
�
�
�
atm.

Notes
Remember: Temperature is given in Celsius while SI unit is Kelvin (
�
K). 
 
0
°
�
=
273.15
�
 0°C=273.15K

The gas constant 
 
�
=
0.082
�
�
3
⋅
�
�
�
⋅
�
−
1
⋅
�
�
�
−
1
 R=0.082dm 
3
 ⋅atm⋅K 
−1
 ⋅mol 
−1


The solution */ 

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    // your code goes here
      const R = 0.082; // gas constant in dm^3.atm.K^-1.mol^-1
  const tempInKelvin = temp + 273.15;// converting temperature to Kelvin
    const totalMass = (givenMass1/molarMass1) + (givenMass2/molarMass2); // total mass of the two gases in moles
    const pressure = (totalMass*R*tempInKelvin)/volume; // total pressure in atm
    return pressure;
  }

