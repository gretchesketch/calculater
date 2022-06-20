import React from "react";
export default
class Component extends React.Component {
    async componentDidMount () {
        
document.getElementsByClassName("global").addEventListener("click",()=>{
    this.variables
})
    }
    variables(e){
    var a = document.getElementById("&radic;");
    var b = document.getElementById("(");
    var c = document.getElementById(")");
    var percent = document.getElementById("%");
    var seven = document.getElementById("7");
    var eight = document.getElementById("8");
    var nine = document.getElementById("9");
    var devide = document.getElementById("/");
    var four = document.getElementById("4");
    var five = document.getElementById("5");
    var six = document.getElementById("6");
    var multiply = document.getElementById("x");
    var one = document.getElementById("1");
    var two = document.getElementById("2");
    var three = document.getElementById("3");
    var subtract = document.getElementById("-");
    var zero = document.getElementById("0");
    var dot = document.getElementById(".");
    var clear = document.getElementById("del");
    var equals = document.getElementById("=");
    var plus = document.getElementById("+");
    
    if(!operand1){
    var operand1 = e.target.value
    }else{
    var operand2 = e.target.value
    }

    switch(operator){
        case "+":
            operand1 + operand2
            break
        case "-":
            operand1 - operand2
            break
        case "*":
            operand1 * operand2
            break
        case "/":
            operand1 / operand2
            break
        default:
            null
    }


    }
    



    render() {
       return (<body>
        <h1>Calculator</h1>
       <div class="container">
         <div class="header">Calculator</div>
         <input type="text" class="result"/>
         <div class="first-row">
           <input id="&radic;" type="button" name="" value="&radic;" class="global"/>
           <input id="(" type="button" name="" value="(" class="global"/>
           <input id=")" type="button" name="" value=")" class="global"/>
           <input id="%" type="button" name="" value="%" class="global"/>
         </div>
         <div class="second-row">
           <input id="7" type="button" name="" value="7" class="global"/>
           <input id="8" type="button" name="" value="8" class="global"/>
           <input id="9" type="button" name="" value="9" class="global"/>
           <input id="/" type="button" name="" value="/" class="global"/>
         </div>
         <div class="third-row">
           <input id="4" type="button" name="" value="4" class="global"/>
           <input id="5" type="button" name="" value="5" class="global"/>
           <input id="6" type="button" name="" value="6" class="global"/>
           <input id="x" type="button" name="" value="X" class="global"/>
         </div>
         <div class="fourth-row">
           <input id="1" type="button" name="" value="1" class="global"/>
           <input id="2" type="button" name="" value="2" class="global"/>
           <input id="3" type="button" name="" value="3" class="global"/>
           <input id="-" type="button" name="" value="-" class="global"/>
         </div>
         <div class="conflict">
           <div class="left">
             <input id="0" type="button" name="" value="0" class=" big"/>
             <input id="." type="button" name="" value="." class=" small"/>
             <input id="del" type="button" name="" value="Del" class=" red small white-text top-margin"/>
             <input id="=" type="button" name="" value="=" class=" green white-text big top-margin"/>
           </div>
           <div class="right">
             <input id="+" type="button" name="" value="+" class="global grey plus"/>
           </div>
         </div>
       </div>
       </body>)
    };
}
