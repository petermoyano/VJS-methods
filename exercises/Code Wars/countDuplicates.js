// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Examples:
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//Questions:
// Copilot version
function countDuplicates(str) {
    let count = 0;
    let strArr = str.toLowerCase().split("").sort();
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i + 1]) {
            count++;
        }
    }
    return count;
}

//My version
function countDuplicates2(str) {
    const characterTracker = {};
    for (let word of str.toLowerCase()) {
        if (characterTracker[word]) {
            characterTracker[word] += 1;
        } else {
            characterTracker[word] = 1;
        }
    }
    let count = 0;
    for (let key in characterTracker) {
        if (characterTracker[key] > 1) {
            count++;
        }
    }
    return count;
}
