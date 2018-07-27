function palindrom(word) {
  var length = word.length - 1;
  var half = Math.ceil(length/2);
  for(let i = 0; i < half; i ++) {
    if(word[i] !== word[length - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrom("tacocat") === true);
console.log(palindrom("racecar") === true);
console.log(palindrom("tacobat") === false);
//console.log(palindrom("TacOCat") === true);
