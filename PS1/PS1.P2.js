//A function that determines the operator (+, *, -, or /) embedded in the string and returns a function
const evaluate  = str  => {
    var res = str.charAt(1);
    if (res == '+') {
        return plus;
    } else if (res == '-') {
        return minus;
    } else if (res == '*') {
        return mult;
    } else if (res == '/') {
        return div;
    } else if (res == '%') {
        return div2;
    }
};
//Functions that implement the input operator that returns the result
const plus = expression => {
    let result = Number(expression.charAt(0)) + Number(expression.charAt(2));
    return result;
};
const minus = str => {
    let result = expression.charAt(0) - expression.charAt(2);
    return result;
};
const mult = str => {
    let result = expression.charAt(0) * expression.charAt(2);
    return result;
};
const div = str => {
    let result = expression.charAt(0) / expression.charAt(2);
    return result;
};
const div2 = str => {
    let result = expression.charAt(0) % expression.charAt(2);
    return result;
};
const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`);