//A function that takes a string as its input and returns a new string that contains all of the
// letters in the original string, but in alphabetical order. Ignore punctuation and numbers.
const makeAlphabet = str =>  {
    var arr = str.split('');
    let alpha;
    //put letters in alphabetical order and ignore punctuation
    alpha = arr.sort().join('').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    //ignore numbers
    alpha = alpha.replace(/\d/g, '');
    return alpha;
};

console.log(`Alphabetical order is: ${makeAlphabet('supercalifragilisticexpialidocious')}`);