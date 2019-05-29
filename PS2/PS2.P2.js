/* a generator that is initialized with a sentence and
that emits each word of the sentence in turn
 */
function* wordPrint (str) {
    const arr = str.split(' ');
    for (var num=0; num<arr.length; num++){
        yield arr[num];
    }
}

word = wordPrint('All I know is something like a\n' +
        'bird within her sang');
let printWord = word.next();
while (printWord.done === false){
    console.log(printWord.value);
    printWord = word.next();
}