// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    const consonants = "bcdfghjklmnpqrstvwxyz".split("");
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (consonants.includes(letter)) {
            count++;
        }
    }
    return count;
}
