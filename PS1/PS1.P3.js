//A function that accepts two input parameters: a string, and a function. The function
// should execute the passed function with the passed string and return the result.
const passingFunction = (str, func) => {
    return func(str);
}
// Pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
// fragments of the input string broken on the character ‘c’.
console.log(passingFunction('supercalifragilisticexpialidocious', str => str.split(/(?=c)/g)));
// Pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
// replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
// string, the modified string, the total number of As in the modified string
console.log(passingFunction('supercalifragilisticexpialidocious', str => {
    var obj = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: (str.match(/a/g) || []).length,
        length: str.length
};
    return obj;
}));

