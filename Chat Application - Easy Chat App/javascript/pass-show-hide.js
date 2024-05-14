const password = document.querySelector(".form .field input[type='password']");
togglegtn = document.querySelector(".form .field i");

togglegtn.onclick = ()=>{
    if(password.type == "password"){
        password.type = "text";
        togglegtn.classList.add("active");
    }
    else{
        password.type = "password";
        togglegtn.classList.remove("active");
    }
}