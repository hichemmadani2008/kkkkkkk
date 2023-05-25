
    function calculateSquare() {
      
      var numberInput = document.getElementById("number");
      var number = parseInt(numberInput.value);

      
      var square = number * number;

      var resultElement = document.getElementById("result");
      resultElement.textContent =  square;
      }
   
   
        function calculateSquareRoot() {
          
          var input = document.getElementById("numberInput").value;
    
        
          var number = parseFloat(input);
    
          
          if (!isNaN(number)) {
           
            var squareRoot = Math.sqrt(number);
    
          
            document.getElementById("res").innerHTML = squareRoot;
          } else {
            
            document.getElementById("res").innerHTML = "NaN";
          }
       }

       
    function addNumbers() {
      
        var number1Input = document.getElementById("number1");
        var number2Input = document.getElementById("number2");
        var number1 = parseInt(number1Input.value);
        var number2 = parseInt(number2Input.value);
  
      
        var sum = number1 + number2;
  
        
        var resultElement = document.getElementById("add");
        resultElement.textContent =  sum;
      }

      function subtractNumbers() {
        
        var number3Input = document.getElementById("number3");
        var number4Input = document.getElementById("number4");
        var number3 = parseInt(number3Input.value);
        var number4 = parseInt(number4Input.value);
  
        
        var difference = number3 - number4;
  
        
        var resultElement = document.getElementById("kak");
        resultElement.textContent =  difference;
      }
      
    function multiplyNumbers() {

        var number5Input = document.getElementById("number5");
        var number6Input = document.getElementById("number6");
        var number5 = parseInt(number5Input.value);
        var number6 = parseInt(number6Input.value);
        
        var square = number5 * number6;
  
        var resultElement = document.getElementById("bab");
        resultElement.textContent =  square;
        }

        function divideNumbers() {
            
            var dividendInput = document.getElementById("dividend");
            var divisorInput = document.getElementById("divisor");
            var dividend = parseFloat(dividendInput.value);
            var divisor = parseFloat(divisorInput.value);
      
            
            var quotient = dividend / divisor;
      
         
            var resultElement = document.getElementById("rr");
            resultElement.textContent =  quotient;
          }
      