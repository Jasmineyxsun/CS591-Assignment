/*The first generator should return
the series of fibonacci numbers starting from 0.
 */
function* fibs () {
    yield 0;
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        yield result;
    }
}
/*The second generator should use the first to obtain the next number in the sequence, rejecting
it if it is odd and asking for the next. Once an even Fibonacci number is obtained, it is emitted.
 */
function* evenFibs() {
    const fib = fibs();
    while (true) {
        let check = fib.next();
        if (check.value % 2 === 0) {
            yield check.value;
        }
    }
}

//Get first five even fibs
myFibs = evenFibs();
let count = 5;
while (count --> 0) {
    console.log(myFibs.next().value);
}