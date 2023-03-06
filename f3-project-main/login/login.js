let loginEmail=document.getElementById("email");
let loginPassword=document.getElementById("password");
let loginButton=document.getElementById("btn");

let loginErr=document.getElementById("login-err");

const userData = JSON.parse(window.localStorage.getItem("users"));
const currUser = {};

loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    let countEmail=0;
    
    userData.map(data => {
        if(data.email === loginEmail.value && data.password === loginPassword.value){
            countEmail++;
            currUser.email= loginEmail.value;
            currUser.password=loginPassword.value;

            console.log(loginEmail.value);
            console.log(loginPassword.value);

            localStorage.setItem("currentlogin",JSON.stringify(currUser));
            window.location.href="/Project-F3/f3-project-main/shop/shop.html";
        }
        if(countEmail == 0){
            loginErr.innerText="Invalid or empty email or password, please try again.";
            loginErr.style.color="red";
            return false;
        }else{
            // loginErr.innerText="";
            // window.location.href="/Project-F3/f3-project-main/shop/shop.html";
        }
    });
})

if(window.localStorage.getItem("currUser")){
    window.location.href="/Project-F3/f3-project-main/shop/shop.html";
}


