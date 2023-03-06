let firstName = document.getElementById("f-name");
let lastName = document.getElementById("l-name");
let oldPassword = document.getElementById("old-password");
let newPassword = document.getElementById("new-password");
let confNewPassword = document.getElementById("conf-new-password");

let buttonSaveInfo = document.getElementById("btn-save-info");
let buttonLogout =  document.getElementById("btn-logout");

buttonSaveInfo.addEventListener("click",modify);
buttonLogout.addEventListener("click",logout);


let modified_data=JSON.parse(window.localStorage.getItem("users"));

function modify(){

let modfirstName = firstName.value;
let modlastName = lastName.value;
let modoldPassword = oldPassword.value;
let modnewPassword =  newPassword.value;
let modconfNewPassword = confNewPassword.value;

let user = users.filter(users.email === currUser.email);
console.log(user);

}

function logout(){
    window.localStorage.removeItem("currentlogin");
    window.location.href("/Project-F3/f3-project-main/Landingpage/index.html");
}
