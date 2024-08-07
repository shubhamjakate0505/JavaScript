# Important Topics

## Single Thread
- **Definition:** 
  - A single-threaded process is one in which only one sequence of instructions is executed at a time.
- **Characteristics:**
  - At any given time, only one task or process is being executed.
  - Commonly seen in environments where simplicity and straightforward execution are preferred.

## Callback Hell
- **Definition:** 
  - Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other.
- **Problems with Callback Hell:**
  - Code becomes difficult to understand.
  - Increased complexity makes debugging and maintaining the code harder.
- **Solution:** 
  - To avoid callback hell, you can use Promises or async/await.
## Promises
- **Definition:** 
  - The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- **Characteristics:**
  - Promises provide a cleaner, more manageable way to handle asynchronous operations compared to nested callbacks.
  - They improve code readability and maintainability.
- **Syntax:**
  ```javascript
  let promise = new Promise(function(resolve, reject) {
    // Asynchronous operation
    // Call resolve(value) when the operation is successful
    // Call reject(error) when the operation fails
  });

## then()&catch():
## asyn()
## Hanling Error

# API
Api Nathing but the Sending Request to the Server and Getting Responces for the Server,Responces data contains in json formate

**json:**
- Json data are just like object only diff is in json data contains both the key and pairs in string formate 