// The purpose of the "strict mode" is to indicate that the code should be executed in "Strict mode"..


// below ex. gives an error coz in strict mode we have to declare vari. first
"use strict";
 x = 3.14
console.log(x)


// x = 3.14
// function myFunction(){
//     "use strict";
//     y=3.14
// }
// console.log(x)


//(1) deleting a variable (or obj) is not allowed..(*)we'll get an error like "Delete of an unqualified identifier in strict mode"..

// "use strict";
// let y = 3.14;
// delete y
// console.log(y)



// (2) Deleting a function is also not allowed.(**)we'll get an error like "Delete of an unqualified identifier in strict mode.  "

// "use strict";
// function A(p1,p2){};
// delete A;
// console.log(A)



//(3) Duplicating of parameter is also not allowed.(*)we'll get an error like "Duplicate parameter name not allowed in this context "

// "use strict"
// function a(p1,p1){}
