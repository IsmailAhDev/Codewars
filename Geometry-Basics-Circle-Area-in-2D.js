/*


 const area = Math.PI * Math.pow(circle.radius, 2);
  return area;
}

// Example usage:
const myCircle = new Circle(new Point(0,0), 5);
const area = circleArea(myCircle);
if (typeof area === "number") {
  console.log(area.toFixed(6));
} else {
  console.error("Invalid input: circleArea() did not return a number.");


*/



function circleArea(circle){
    const area = Math.PI * Math.pow(circle.radius, 2);
    return area;
  }
  
  // Example usage:
  const myCircle = new Circle(new Point(0,0), 5);
  const area = circleArea(myCircle);
  if (typeof area === "number") {
    console.log(area.toFixed(6));
  } else {
    console.error("Invalid input: circleArea() did not return a number.");
  }