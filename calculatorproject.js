let nums =document.querySelectorAll(".num");
let display =document.getElementById("display");
let sign = document.getElementById("neg");
let AC = document.getElementById("clear");
let op1 =0;
let op2=null;
let operator=null;

for(var i=0; i<nums.length; i++){
    nums[i].addEventListener('click', function(){
        console.log(nums[i]);
        var value = this.getAttribute('data-value');
        if(value == '+'){
            operator ='+';
            op1 = parseFloat(display.textContent);
            display.innerText =" ";
         }
        else if(value == '-'){
            operator ='-';
            op1 = parseFloat(display.textContent);
            display.innerText =" ";
        }
        else if(value == '*'){
            operator ='*';
            op1 = parseFloat(display.textContent);
            display.innerText =" ";
        }
        else if(value == '/'){
            operator ='/';
            op1 = parseFloat(display.textContent);
            display.innerText =" ";
        }
        else if(value == '%'){
            operator ='%';
            op1 = parseFloat(display.textContent);
            display.innerText =op1/100;
        }
        else if(value == '='){
            op2 = parseFloat(display.textContent);
            let result = eval(op1 + operator + op2);
            if(result==Infinity){
                display.innerText="ERROR"
            } 
            else{
            display.textContent =result;
            }
        } 
        else{
            display.innerText += value;
        }
    });

    sign.addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if(value == '+/-'){
            display.innerText ="-";
            op1 = parseFloat(display.textContent);
        }
    })
    AC.addEventListener('click', function(){
            display.innerText =" ";
            
        });
    
}

// for(let i=0; i < nums.length ; i++){
//     nums[i];
//     console.log(nums[i]);
// }





