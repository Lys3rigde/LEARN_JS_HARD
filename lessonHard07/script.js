"use strict";

let arr = ['29', '291', '420', '322', '82', '726', '400'];
arr.forEach((item) => {
  if (item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
});

function prime(n){
    for (let i = 2; i * i <= n; i === 2 ? i++ : i += 2) if (n % i === 0) return false;
    return n > 1;
  }
  
  const res = [...Array(101)].reduce((a, _, i) =>
   a.concat(prime(i) ? `${i}: 1 и ${i}` : []) , []).join('\n');
  console.log(res);