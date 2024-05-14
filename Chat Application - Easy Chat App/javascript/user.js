const searchbar = document.querySelector(".users .search input");
searchbtn = document.querySelector(".users .search button"),
userlist = document.querySelector(".users .users_list");


searchbtn.onclick = ()=>{
    searchbar.classList.toggle("active");
    searchbar.focus();
    searchbtn.classList.toggle("active");
    searchbar.value = "";
}

searchbar.onkeyup = ()=>{
    let searchTerm = searchbar.value;
    if(searchTerm != ""){
        searchbar.classList.add("active");
      }else{
        searchbar.classList.remove("active");
      }
      // using Ajax
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "php/search.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let data = xhr.response;
            userlist.innerHTML = data;
        }   
      }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("searchTerm=" + searchTerm);
}

setInterval(() => {
    // using Ajax
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "php/user.php", true);
    xhr.onload = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          let data = xhr.response;
          if(!searchbar.classList.contains("active")){//if class is not active then it will run
            userlist.innerHTML = data;
          }
        }   
      }
    }
    xhr.send();
}, 500);

