const { from, throwError } = require('rxjs');
const { mergeMap, retryWhen, delay, take } = require('rxjs/operators');
const { ajax } = require('rxjs/ajax');

const url = 'http://localhost:3000/hello';
/*
This code block defines a function that takes an observable and returns a new observable. The new observable emits the same items as the original observable, but if the original observable emits an error, the new observable will wait for 1000ms and then try again, up to a maximum of 3 times. This function is used as an argument to the retryWhen operator later in the code.
const retryStrategy = ({ attempts = 3, delayTime = 1000 } = {}) => errors => {
  return errors.pipe(
    delay(delayTime),
    take(attempts),
  );
};
``` 

Explanation: This code defines a retryStrategy function that takes an object with two optional properties (attempts and delayTime) and returns a function that takes an observable of errors and returns a new observable. The new observable delays for delayTime milliseconds and then resubscribes to the original observable, up to a maximum of attempts times. This function is used as an argument to the retryWhen operator later in the code to retry failed HTTP requests.
*/
const source$ = from(ajax(url)).pipe(
 // mergeMap is an operator that transforms the items emitted by an observable into observables, then flattens the emissions from those observables into a single observable. In this case, we are using it to transform the response from the ajax call into an observable that emits the response data.
 mergeMap(response => {
    if (response.status === 200) {
      return response.response;
    } else {
      // throwError is an RxJS function that creates an observable that immediately emits an error. In this code, we are using it to create an observable that emits an error when the HTTP response status is not200. This error will be caught by the retryWhen operator and trigger a retry of the HTTP request. 

      return throwError(response);
    }
  }),
  // The retryWhen operator is an RxJS operator that takes a function that returns an observable of errors. When the source observable emits an error, the retryWhen operator will subscribe to the observable returned by the function and use it to resubscribe to the source observable. This allows us to retry failed HTTP requests, as shown in the code below.
  retryWhen(errors =>
    errors.pipe(
      delay(1000),
      take(3)
    )
  )
);

source$.subscribe({
  next: console.log,
  error: console.error,
  complete: () => console.log('Complete')
});



// pipe 
// The "pipe" function is an RxJS function that allows you to chain multiple operators together to create a pipeline of data transformations. In this code, we are using the "pipe" function to chain together the "mergeMap" and "retryWhen" operators. The "mergeMap" operator transforms the response from the HTTP request into an observable that emits the response data, while the "retryWhen" operator allows us to retry failed HTTP requests by resubscribing to the source observable after a delay. By chaining these operators together with the "pipe" function, we create a pipeline that transforms the HTTP response into a stream of data that can be retried if necessary.