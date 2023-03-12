/*  THE PROBLEM 


Terminal game bug squashing
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move



*/               




var health = 100
2
var position = 0
3
var coins = 0
4
​
5
function main () {
6
  rollDice()
7
  move()
8
  combat()
9
  getCoins()
10
  buyHealth()
11
  printStatus()
12
}