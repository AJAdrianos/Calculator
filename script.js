const reservedChar = 
    [ 
        "(", ")", "/",
        "x", "-", "+",
        ".", "%",
        "9", "8", "7", 
        "6", "5", "4", 
        "3", "2", "1", 
        "0",
    ];

let expression = "";


// click button, add value to the expression
// press equal, evaluate the expression 
// double for, for checking if values arent in the reservedChar array

function addValueToExpression(value) {
    console.log(value);
};

function clearExpression(){
    expression = "";
}