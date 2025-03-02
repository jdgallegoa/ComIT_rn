const promise1 = new Promise((onSuccess) => {
  console.log("Promise 1");
  setTimeout(()=>{onSuccess(10)},2000);
});

const promise2 = new Promise((onSuccess, onError) => {
  console.log("Promise 2");
  onError(new Error("Error que llega de la promise 2"));
});

const promise3 = new Promise((onSuccess) => {
  console.log("Promise 3");
  setTimeout(()=>{onSuccess('Juan')}, 5000);
});

const promises = [promise1, promise2, promise3];

Promise.allSettled(promises).then((results) => {
  console.log(results);
  console.log("All settled");
});