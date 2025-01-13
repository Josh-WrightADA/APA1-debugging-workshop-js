function capitalise(word) {
  word = word[0].toUpperCase() + word.substring(1).toLowerCase();
  return word;
}
console.log(capitalise("hello"));
module.exports = { capitalise };

 
