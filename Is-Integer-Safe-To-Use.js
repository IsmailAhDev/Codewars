                                /* THE PROBLEM     


                                Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

                                    SafeInteger(9007199254740990) //true
                                    SafeInteger(-90) //true
                                    SafeInteger(9007199254740992) //false


                                    The solution */


                                    function SafeInteger(n) {
                                        //First Figure out which integers are safe to use or not in javascript
                                        //Secondly use the latest es6 features to find this
                                        if (Number.isSafeInteger(n)){
                                            return true
                                        }else{
                                          return false;
                                        }
                                        
                                      }
