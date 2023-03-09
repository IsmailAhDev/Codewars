/*    T    H    E    P   R   O    B  L  E M  


Write a function that returns the total surface area and volume of a box as an array: [area, volume]





 
  T H E   SOL  U  T I  O N */


  const getSize = (width, height, length) => {
    const area = 2 * (height * width + height * length + width * length)
      const volume = width * height * length;
      return [area, volume];
    }
    
    