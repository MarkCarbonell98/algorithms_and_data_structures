// car and cat
const carAndCat = /ca(t|r)/;

// pop and prop
const popAndProp = /pr?op/

// ferret, ferry, and ferrari
const ferretFerryAndFerrari = /ferr(et|y|ari)/

// Any word ending in ious
const ious = /\b\w*(ious)\b/m


// A whitespace character followed by a period, comma, colon, or semicolon
const periodColonSemi = /\s(\.|,|;)/
// A word longer than six letters
const longerThanSixCharacters = /\b\w{7,}\b/

// A word without the letter e (or E)
const withoutEore = /\b[a-df-zA-DF-Z]+\b/

const verify = (regex, match, noMatch) => {
    if(regex.source == '...') return undefined;
    for(const str of match) if(!regex.test(str)) console.log(`failure to match ${str}`);
    for(const str of noMatch) if(regex.test(str)) console.log(`Unexpected match for ${str}`);
}

verify(carAndCat,
    ["my car", "bad cats"],
    ["camper", "high art"]);

verify(popAndProp,
    ["pop culture", "mad props"],
    ["plop", "prrrop"]);

verify(ferretFerryAndFerrari,
    ["ferret", "ferry", "ferrari"],
    ["ferrum", "transfer A"]);

verify(ious,
    ["how delicious", "spacious room"],
    ["ruinous", "consciousness"]);

verify(periodColonSemi,
    ["bad punctuation ."],
    ["escape the period"]);

verify(longerThanSixCharacters,
    ["hottentottententen"],
    ["no", "hotten totten tenten"]);

verify(withoutEore,
    ["red platypus", "wobbling nest"],
    ["earth bed", "learning ape", "BEET"]);

let text = "'I'm the cook,' he said, 'it's my job.'";

console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));
// → "I'm the cook," he said, "it's my job."

// Fill in this regular expression.
let number = /(\+|-|)(\.\d|\d\.|\d+|[eE])/g
number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}