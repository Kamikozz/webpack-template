'use strict';
console.log(eval('3 + 5'));
const add = (a, b) => a + b;

console.log(add(2, 3));
console.log('lol');

// (async function() {
//   const items = await fetch('https://yandex.ru');
//   console.log(items);
// })();

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
}

f();