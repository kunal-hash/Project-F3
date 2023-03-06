const firstname = document.getElementById("f-name");
const lastname = document.getElementById("l-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("conf-pass");
const emptyerr = document.getElementById("empty-err");
var mailformat = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";


const nameError=document.getElementById("name-err");
const lastnameError=document.getElementById("l-name-err");
const emailError=document.getElementById("email-err");
const passwordError=document.getElementById("pass-err");
const confPasswordError=document.getElementById("conf-pass-err");

const button = document.getElementById("btn");

 


let users =[];
if(window.localStorage.getItem('users')){
   JSON.parse(localStorage.getItem('users')).map(value=>{
    users.push(value);
   })
    
}
console.log(users);

button.addEventListener("click",(e) =>{
    
    e.preventDefault();

    if((firstname.value == null || firstname.value == "") && (lastname.value == null || lastname.value == "") && (email.value == null || email.value == "") && (password.value == null || password.value == "") && (confirmpassword.value == null || confirmpassword.value=="")){
        emptyerr.innerText="Please fill in all the details.";
        emptyerr.style.color="red";
        return false;
    }else{
        emptyerr.innerText="";
    }

   // name validation

   

    if(firstname.value.length == 0){
        nameError.innerText="First name should not be empty.";
        nameError.style.color="red";
        return false;
    }else{
        nameError.innerText="";
    }
    //last name validation
    if(lastname.value.length == 0){
        lastnameError.innerText="Last name should not be empty.";
        lastnameError.style.color="red";
        return false;
    }else{
        lastnameError.innerText="";
    }

    //email validation
    if(email.value.length == "0"){
        emailError.innerText="Email should not be empty.";
        emailError.style.color="red";
        return false;
    }else{
        emailError.innerText="";
    }

    if(email.value){
        for(let i=0;i<users.length;i++){
            if(users[i].email == email.value){
                emailError.innerText="Email already exist";
                emailError.style.color="red";
                return false;
            }
        }
    }
    

    
    if(email.value.indexOf('@')<=0 || !email.value.match(mailformat)){
        emailError.innerText="Please enter valid email address.";
        emailError.style.color="red";
        return false;
    }

    // if(users.email.includes(email.value)){
    //     emailError.innerText="Email already Exists";
    //     emailError.style.color="red";
    //     return false;
    // }
    
    if(email.value.lastIndexOf('.')!=email.value.length-4 || !email.value.match(mailformat)){
        emailError.innerText="Please enter valid email address."
        emailError.style.color='red';
        return false;
    }

    if(password.value.length == "0"){
        passwordError.innerText="Password should not be empty";
        passwordError.style.color="red";
        return false;
    }else{
        passwordError.innerText="";
    }


    //uppercase
    if(!password.value.match(/[A-Z]/)){
        passwordError.innerText="Password should contain one uppercase, once lowercase, one number and one symbol";
        passwordError.style.color="red";
        return false;
    }

    //lowercase
    if(!password.value.match(/[a-z]/)){
        passwordError.innerText="Password should contain one uppercase, once lowercase, one number and one symbol";
        passwordError.style.color="red";
        return false;
    }
    if(!password.value.match(/[0-9]/)){
        passwordError.innerText="Password should contain one uppercase, once lowercase, one number and one symbol";
        passwordError.style.color="red";
        return false;
    }
    if(!password.value.match(/[!/@/#/$/%/^/&/*/</>/_/]/)){
        passwordError.innerText="Password should contain one uppercase, once lowercase, one number and one symbol";
        passwordError.style.color="red";
        return false;
    }else{
        passwordError.innerText="";
    }
    //confirm password validation

    if(confirmpassword.value.length == 0){
        confPasswordError.innerText="Confirm password should not be empty."
        confPasswordError.style.color="red";
        return false;
    }
    if(password.value !== confirmpassword.value){
        confPasswordError.innerText="Password and confirm password should be same";
        return false;
    }else{
        confPasswordError.innerText="";
    }

    console.log(firstname.value);
    console.log(lastname.value);
    console.log(email.value);
    console.log(password.value);
    console.log(confirmpassword.value);

    const userData = {
        firstname : firstname.value,
        lastname : lastname.value,
        email : email.value,
        password : password.value,
        confpass : confirmpassword.value,
        
    };

    users.push(userData);
    console.log(users);
    window.localStorage.setItem('users',JSON.stringify(users));
    window.location.reload();
})


    


