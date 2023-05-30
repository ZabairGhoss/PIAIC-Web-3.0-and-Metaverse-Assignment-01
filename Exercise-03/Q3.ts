let username: string = "Ali Zia";

console.log(`LoweCase Name: ${username.toLowerCase()}`);
console.log(`UpperCase Name: ${username.toUpperCase()}`);

const words: string[] = username.split(" ");
const titleCaseWords: string[] = [];

for (let word of words) {
  titleCaseWords.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

console.log(`Titlecase: ${titleCaseWords.join(" ")}`);