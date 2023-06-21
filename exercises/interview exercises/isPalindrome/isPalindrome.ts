//Questions I would ask:
// Should I ignore capitalizing, or not? Yes ignore it.
//  What about spaces in front and at the end of the word. There won't be any.
//Solvd => [d,v,l,o,S] ... =>

function isPalindrome(word: string): boolean {
    let reverseWord: string[] = [];
    for (let letter of word) {
        reverseWord.unshift(letter);
    }
    for (let i = 0; i < reverseWord.length; i++) {
        if (reverseWord[i] !== word[i]) return false;
    }
    return true;
}

console.log(isPalindrome("Ana")); // false
console.log(isPalindrome("ana")); // true
console.log(isPalindrome("Peter")); //false
