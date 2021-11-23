console.log(checkBalance("(((((()")) // false
console.log(checkBalance("(()))))(((")) // false
console.log(checkBalance("")) // true
console.log(checkBalance("((()))()")) // true
console.log(checkBalance(")(")) // false
console.log(checkBalance("()()")) // true
console.log(checkBalance("((((((((()))))))))((((())))))))))))))))))((((((((()))))")) // false

function checkBalance (s) {
    let countOpenBracket = 0
    let countCloseBracket = 0
    
    for ( let i = 0 ; i < s.length ; i++ ) {
        if (s[i] == "(") {
            countOpenBracket ++
        } else if (s[i] == ")") {
            if (countCloseBracket >= countOpenBracket) {
                return false
            } else {
                countCloseBracket ++
            }
        } 

    };
    // validate balance of bracket
    if (countOpenBracket == countCloseBracket) {
        return true
    } else {
        return false
    }
}