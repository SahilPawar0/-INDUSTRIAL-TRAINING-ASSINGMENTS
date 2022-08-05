operation = (o) => {
    let res = document.getElementById('res');
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    res.value = calculate(num1, num2, o);
  }
   
  calculate = (x, y, o) => {
    if(o == '+') {
      return x + y;
    }
    if(o == '-') {
      return x - y;
    }
    if(o == '*') {
      return x * y;
    }
    if(o == '/') {
      return x / y;
    }
    
    
  }