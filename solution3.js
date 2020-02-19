// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

const oddOrEvenish = num => {
  let added = num
    .toString()
    .split("")
    .reduce((total, amount) => parseInt(total) + parseInt(amount));
  let result = added % 2 == 0 ? console.log("Evenish") : console.log("Oddish");
};

oddOrEvenish(43);
oddOrEvenish(373);
oddOrEvenish(4433);

// Examples
// oddishOrEvenish(43) ➞ "Oddish"

// oddishOrEvenish(373) ➞ "Oddish"

// oddishOrEvenish(4433) ➞ "Evenish"
