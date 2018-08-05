// find the smalles number that is divisable by 1-20
//


function smallNum(highestNum) {
  var num = highestNum;
  var found = false;
  while(!found) {
   if(getSum(num) % 3 === 0 && checkRest( 7, highestNum, num)) {
     found = true;
   } else {
    num += highestNum;
   }
    
  }
  return num;
}
function checkRest(min, max, number) {
  var isDev = true;
  for( var num = min; num <= max; num++) {
    if(number % num !== 0) {
      isDev = false;
      break;
    }
  }
  return isDev;
}

function getSum(number){
  var array = number.toString().split('');
  var sum = 0;
  array.forEach(function(num) {
    sum += Number(num);
  });
  return sum;
}

//console.log(getSum(234) === 9);
console.log(smallNum(10) === 2520);
console.log(smallNum(20));
