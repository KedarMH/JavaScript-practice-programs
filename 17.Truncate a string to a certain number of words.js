//Truncate a string to a certain number of words

const str = 'The quick brown fox jumps over the lazy dog '
const wordLimit = 4
function truncate(str, wordLimit) {
    return str.split(" ").splice(0, wordLimit).join(" ");
}
let truncatedString = truncate(str, wordLimit);
console.log(truncatedString); 