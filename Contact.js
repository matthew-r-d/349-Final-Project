
///////////////////////////////////FORM STUFF///////////////////////////////////////
function form(event) {          //need event

    event.preventDefault();     //so doesn't get refreshed when submitted

//getting the info
let f_name = document.getElementById("f_name");
let l_name = document.getElementById("l_name");
let email = document.getElementById("email");
let erro = document.getElementById("error");


//conditions
if(f_name.value == "" || l_name.value == "")
{
    error.innerText="Please enter your first and last name";
}
else if(email.value == "")
{
    error.innerText="Please enter your email";
}
else if(message.value == "")
{
    error.innerText="You didn't write anything";
}
else{
    error.innerHTML="Submitted!";
    //because I don't have a backend server to send an actual email to my email,
    //I made the information show up in the console to prove that the code works 
    console.log(f_name.value);
    console.log(l_name.value);
    console.log(email.value);
    console.log(message.value);
}
}
////////////////////////////////////END OF FORM//////////////////////////////////
