/* The split() method divides a String into an ordered list of substrings, puts these substrings 
into an array, and returns the array. The division is done by searching for a pattern; 
where the pattern is provided as the first parameter in the method's call. 

split()
split(separator)
split(separator, limit)


If separator is omitted or does not occur in str, the returned array 
contains one element consisting of the entire string.

If separator is an empty string (""), str is converted to an array of each of its UTF-16 "characters".
*/
class mySplit {
  constructor(
    str
  ) {
    this.str =
      str;
  }
  split(
    separator
  ) {
    if (
      !separator
    ) {
      return [
        this
          .str,
      ];
    }
    const splitStr =
      [];
    let currentSplit =
      "";
    for (
      let i = 0;
      i <
      this.str
        .length;
      i++
    ) {
      if (
        this
          .str[
          i
        ] ===
        separator
      ) {
        splitStr.push(
          currentSplit
        );
        currentSplit =
          "";
        continue;
      }
      currentSplit +=
        this
          .str[
          i
        ];
    }
    splitStr.push(
      currentSplit
    );

    return splitStr;
  }
}

const str1 =
  new mySplit(
    "peter"
  );
const str2 =
  new mySplit(
    "Moyano"
  );
const str3 =
  new mySplit(
    "abcabc123"
  );

console.log(
  str1.split(
    "e"
  )
);
console.log(
  str1.split(
    "r"
  )
);
console.log(
  str2.split(
    "M"
  )
);
console.log(
  str3.split(
    "K"
  )
);
