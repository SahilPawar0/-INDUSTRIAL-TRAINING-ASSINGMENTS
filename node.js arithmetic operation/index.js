var calculator = require('./calc');
	
var x = 100, y = 100;
	
console.log("Addition of 100 and 100 is "
				+ calculator.add(x, y));
	
console.log("Subtraction of 100 and 100 is "
				+ calculator.sub(x, y));
	
console.log("Multiplication of 100 and 100 is "
				+ calculator.mult(x, y));
	
console.log("Division of 100 and 100 is "
				+ calculator.div(x, y));
