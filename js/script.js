// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let submit_button = document.getElementById("submitfield");
let name= document.getElementById("namefield");
let email = document.getElementById("emailfield");
let message = document.getElementById("messagefield");

// Declare variable that will 
// store regular expression for email
let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function handle(ev){
  ev.preventDefault();

       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let fData = {};
    let fErrors = [];


    // +-----------+    
    // | FULL NAME |
    // +-----------+

    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if ( name.value !== ""){
      fData['fullname'] = name.value;
    }
    else{
      fErrors.push({fullname : "Full name is missing."});
    }



    // +-------+    
    // | EMAIL | 
    // +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.

      if ( email.value !== ""){
      if (regex.test(email.value)) {
        fData['email'] = email.value;
    }
    else{
      fErrors.push({email : "Invalid email."});
    }
     }else{
      fErrors.push({email : "Email is missing."});
    }



    // +---------+    
    // | MESSAGE | 
    // +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.

 if ( message.value !== ""){
      fData['message'] = message.value;
    }
    else{
      fErrors.push({email : "Message is missing."});
}

    // +-----------------+
    // | FEEDBACK/ERRORS |
    // +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

 if(fErrors.length > 0){
      console.log(fErrors);
    }else{
      console.log(fData);
      name.value = "";
      email.value = "";
      message.value = "";
    }


// Close your function here
}

// Register your form to "click" event.
submit_button.addEventListener("click", handle);



 
