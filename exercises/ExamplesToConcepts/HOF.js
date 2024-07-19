// Write a function that accepts a string 
// should process the string and return a list of all the unique words
// and the amount of times the unique words are present

// "Hello, world! hello from Solvd to Solvd I'm happy" => {"hello": 2, "world": 1, "from": 1, "solvd": 2, "to": 1, "i'm": 1, "happy": 1}
// ?!, => ignore
// ' => not ignore
let testStr = "Hello, world! hello from Solvd to Solvd I'm happy";

function wordCount(str) {
  if (typeof str !== "string") {
    throw new TypeError("Argument must be of type string!")
  }
  let wordCountObj = {}
  str.toLowerCase()
    .replace(/[?!,.]/g, "")
    .split(" ")
    .forEach((word) => {
      if (!wordCountObj[word]) {
        wordCountObj[word] = 1;
      }
      else {
        wordCountObj[word] += 1
      }
    });
  return wordCountObj
}



try {
  console.log(wordCount(testStr));
  console.log(wordCount(123));
} catch (e) {
  console.error(e.message);
}

(`hello, my Friend, hello! So, I'm happy you noticed this. Aren't you?`).match(/[\w']+/ig).map(w => w.toLowerCase()).sort().reduce((acc, w) => { acc[w] ??= 0; acc[w]++; return acc; }, {})