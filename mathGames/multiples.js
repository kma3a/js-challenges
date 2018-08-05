
function multiples(topNum) {
  var sum = 0;
  for(let num = 1; num < topNum; num++) {
    if(num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(multiples(10) === 23);
console.log(multiples(1000));
