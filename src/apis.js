import { toast } from "react-toastify";

// 1. User sign in passing: username and password
export function signIn(username, password) {
  return (
    fetch("/auth/token/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }) // End feth func

    // 2. Check in the console: success or error
    .then((response) => {
      console.log(response);
      
      // If it is success
      if (response.ok) {
        return response.json();
      } 

      // Otherwise, if there are errors
      return response.json().then((json) => {
        // Handle JSON error, response by the server

        // If the authentication failed, but why it happend?
        if (response.status === 400) {
          // Get the errors
          const errors = Object.keys(json).map(
            (k) => `${(json[k].join(" "))}`
          );
          throw new Error(errors.join(" "));
        }
        // If errors are not about the authentication, 
        // or any other type of errors, throw general errors here
        throw new Error(JSON.stringify(json));
      })  // End return errors      

      // Catch and throw the errors
      .catch((e) => {
        throw new Error(e);
      })
    }) // End check in the console

    // 2. If sign in success, call API to send response  
    //    to the client by displaying success message in the browser
    .then((json) => {
      // json: as the message
      // type: success
      toast(JSON.stringify(json), { type: "success" });
    }) // End success sign in

    // Handle all errors throwing from the above
    .catch((e) => {
      // Handle all errors
      toast(e.message, { type: "error" });
    })
  );
} // End signIn function


