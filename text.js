 function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
      console.log("Enterinng the Executor callback in the promise function");
        setTimeout(function () {
            let num = getRandomInt(10);
            if(num%2==0) {
              resolve(num);
            } else{
              reject(num);
            }
          
        }, 1000);
        console.log("Exiting the executor callback int he promise constructor");
    });
}


console.log("starting");

const p = createPromiseWithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("currently my promise object is like ...." , p);

p.then(
  function fulfilHandler(value) {console.log ("Inside fulfill Handler with value", value);},
  function rejectionHandler (value) {console.log ("Inside rejection Handler with value", value);}
);
