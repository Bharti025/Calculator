const calculate=document.querySelector('.display');

const updateScreen=(number)=>{
    calculate.value=number;
}

const numbers=document.querySelectorAll(".number");

let prevInput='0';
let calculationOperator='';
let currInp='0';

const inputNumber=(number)=>{
    if(currInp==='0'){
        currInp=number;
    }
    else{
        currInp+=number;
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currInp);
    })
})

const operators = document.querySelectorAll(".operator");
const inputOperator=(operator)=>{
  prevInput=currInp;
  calculationOperator=operator;
  updateScreen(operator);
  currInp='0';
}

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const equal=document.querySelector('.equal-sign');
equal.addEventListener("click",()=>{
    calculated();
    updateScreen(currInp);
})


const calculated = ()=>{
    let result=0;
 switch(calculationOperator){
    case '+':
        result = parseFloat(prevInput) + parseFloat(currInp)
        break;
    case '-':
        result = parseFloat(prevInput) - parseFloat(currInp)
        break;
    case '*':
        result = parseFloat(prevInput) * parseFloat(currInp)
        break;
    case '/':
        result = parseFloat(prevInput) / parseFloat(currInp)
        break;
case '%':
        result = (parseInt(prevInput)/100)*parseInt(currInp)
        break;
    default:
        return;
 }

 currInp=result.toString();
 calculationOperator='';
}

const clearBtn= document.querySelector('.all-clear');

clearBtn.addEventListener("click",()=>{
    console.log('Clear');
})

const clearAll=()=>{
    prevInput='0';
    currInp='0';
    calculationOperator='';
}

clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currInp);
})

const delBtn= document.querySelector('.delete');
delBtn.addEventListener("click",()=>{
    currInp=Math.floor(currInp/10);
    updateScreen(currInp);
})




