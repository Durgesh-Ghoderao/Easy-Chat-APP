const form = document.querySelector(".typing_area");
inputField = form.querySelector(".input_field"), 
sendBtn = form.querySelector("button"),
ChatBox = document.querySelector(".Chat_Box");

form.onsubmit = (e)=>{
    e.preventDefault();
}
sendBtn.onclick = ()=> {
    // using Ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/Insert_chat.php", true);
    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
            inputField.value = "";
            scrollToBottom();
          }
      }
    }
    // sending form data through ajax to php
    let formData = new FormData(form);//form data object
    xhr.send(formData);// sending data to php
}

ChatBox.onmouseenter = ()=>{
  ChatBox.classList.add("active");
}

ChatBox.onmouseleave = ()=>{
  ChatBox.classList.remove("active");
}
ChatBox.addEventListener("scroll",  event)
setInterval(() => {
    // using Ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/get_chat.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          ChatBox.innerHTML = data;
          if(!ChatBox.classList.contains("active")){
            scrollToBottom(); 
          }
        }     
      }
    }
    // sending form data through ajax to php
    let formData = new FormData(form);//form data object
    xhr.send(formData);// sending data to php
}, 500);

function scrollToBottom(){
  ChatBox.scrollTop = ChatBox.scrollHeight;
}