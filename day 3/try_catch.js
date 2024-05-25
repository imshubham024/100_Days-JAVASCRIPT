
  //Syntax

// try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }

try{
    const result=5/0;
}
catch(err) {
  console.log(err);
}
// HTML Validation   html was input adapter
// The code above is just an example.

// Modern browsers will often use a combination of JavaScript and built-in HTML validation, using predefined validation rules defined in HTML attributes:

// <input id="demo" type="number" min="5" max="10" step="1">
// You can read more about forms validation in a later chapter of this tutorial.