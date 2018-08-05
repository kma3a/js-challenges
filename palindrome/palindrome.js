function palindrom(word) {
  word = word.replace(/[\W]/g, "");
  var length = word.length - 1;
  var half = Math.ceil(length/2);
  for(let i = 0; i < half; i ++) {
    if(word[i].toLowerCase() !== word[length - i].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(palindrom("tacocat") === true);
console.log(palindrom("racecar") === true);
console.log(palindrom("tacobat") === false);
console.log(palindrom("TacOCat") === true);
console.log(palindrom("put it up") === true);
console.log(palindrom("TacOCat!") === true);
console.log(palindrom("TacO Cat!") === true);
