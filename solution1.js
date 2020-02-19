// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

const oddOrEvenish = num => {
  let numStr = num.toString();
  let numStrArr = numStr.split("");
  let numArr = [];
  let added = 0;
  let result;
  for (let i = 0; i < numStrArr.length; i++) {
    numArr.push(parseInt(numStrArr[i]));
  }
  for (let i = 0; i < numArr.length; i++) {
    added += numArr[i];
  }
  if (added % 2 == 0) {
    console.log("Evenish");
  } else {
    console.log("Oddish");
  }
};

oddOrEvenish(43);
oddOrEvenish(373);
oddOrEvenish(4433);

// Examples
// oddishOrEvenish(43) ➞ "Oddish"

// oddishOrEvenish(373) ➞ "Oddish"

// oddishOrEvenish(4433) ➞ "Evenish"
