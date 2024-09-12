const numberChar = 
    [
        "9", "8", "7", 
        "6", "5", "4", 
        "3", "2", "1", 
        "0"
    ];

const operationsChar =
[
    "/",
    "*", "-", "+",
    ".", "%"
]

const brackets =
[
    "(", 
    ")" 
]

let expression = "";
let newValue = 0;
let runningValue = "";
let runningBracketCount = 0;

const expressionOutput = document.getElementById("expression-output");
const output = document.getElementById("evaluation-output");

// click button, add value to the expression
// press equal, evaluate the expression 
// double for, for checking if values arent in the reservedChar array

function addValueToExpression(value) {
    if(operationsChar.indexOf(value) === -1){
        runningValue += value;
        expression += value;

        output.value = runningValue;
    }
    else {
        if(!expression == ""){
            if(numberChar.lastIndexOf(expression[expression.length - 1]) != -1 || expression[expression.length - 1] == ")"){
                expression += value;
                output.value = value;
                
                runningValue = "";
            }
        }
    }


    expressionOutput.value = expression;
};


function addBracket() {
    let chosenBracket = chooseBracket();
    if(expression[expression.length - 1] == ")" && chosenBracket == "("){
        expression += "*";
    }
    expression += chosenBracket;
    output.value = chosenBracket;
    expressionOutput.value = expression;
}

function chooseBracket(){
    let check = (numbGreaterThanOps()) && (!equalNumBrackets()) && (expression[expression.length - 1] != "(");
    return check ? ")": "(";
}

function numbGreaterThanOps(){
    let operationsCount = 0;
    let numbersCount = 0;
    for(let i = 0; i < expression.length; i++) {
        for(let j = 0; j < operationsChar.length; j++) {
            if(expression[i] == operationsChar[j]){
                operationsCount++;
            }
        }
    }

    for(let i = 0; i < expression.length; i++) {
        for(let j = 0; j < numberChar.length; j++) {
            if(expression[i] == numberChar[j]){
                numbersCount++;
            }
        }
    }
    return numbersCount > operationsCount;
}

function equalNumBrackets(){
    let openBracketCount = 0;
    let closeBracketCount = 0;
    for(let i = 0; i < expression.length; i++) {
        if(expression[i] == brackets[0]){
            openBracketCount++;
        }
        else if (expression[i] == brackets[1]) {
            closeBracketCount++;
        }
    }
    
    if(openBracketCount == closeBracketCount) {
        return true;
    }
    else{
        return false;
    }
}

function evaluateExpression() {
    if(expression != ""){
        let latestValue = eval(expression);
        if(latestValue != newValue){
            newValue = latestValue;            
            output.value = newValue;

        }
        clearExpression();
    }
}

function clearExpression(){
    expression = "";
    runningValue = "";
}

function clearExpressionAndOutput(){
    clearExpression();
    output.value = "";
    expressionOutput.value = "";
}