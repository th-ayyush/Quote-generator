let isValidPassphrase = (text) => {
    // Split the text into different words using space as the delimiter
    let words = text.split(" ");
  
    // Check if there are at least four words
    let minimumFourWords = words.length >= 4;
  
    // Check that each word has at least two characters
    let minimumTwoCharsEach = words.every(word => word.length >= 2);
  
    // Check if both conditions are satisfied
    let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;
  
    // Return the final result
    return conditionsSatisfied;
  }
  
  // Don't alter the `module.exports` line below - if you want to test your code, copy and
  // paste the function, starting from `let isValidPassphrase = ...` to the final closing
  // brace `}` into the browser's console, and call the function with different values.
  //
  // For example: `isValidPassphrase("this should be enough")`
  //
  // IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
  // file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
  // function and use it.
  module.exports = isValidPassphrase;
  