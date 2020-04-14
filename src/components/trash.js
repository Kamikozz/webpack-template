// 'use strict';

const trash = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve('готово!'), 1000);
  });

  const result = await promise; // будет ждать, пока промис не выполнится (*)

  alert(result); // "готово!"
  // const func = async () => {
  //   const promise = new Promise((resolve) => {
  //     setTimeout(() => resolve('готово!'), 1000);
  //   });

  //   const result = await promise; // будет ждать, пока промис не выполнится (*)

  //   alert(result); // "готово!"
  // };

  // return func;
};

export default trash;

// module.exports = () => {
//   async function() {
//     const promise = new Promise((resolve) => {
//       setTimeout(() => resolve('готово!'), 1000);
//     });

//     const result = await promise; // будет ждать, пока промис не выполнится (*)

//     alert(result); // "готово!"
//   }
// };
