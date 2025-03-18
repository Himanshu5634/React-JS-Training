const check = document.getElementById("check");
const email = document.getElementById("email");

check.addEventListener("click", (e) => {
  e.preventDefault();
  let confirm

  const users = JSON.parse(localStorage.getItem("users")) || []

  
  const user = users.find((user) => user.email == email.value)
 
  
  if (user) {
     confirm = window.confirm("user find.redicrect to login page");
    if(confirm){
      window.location.href = "./login.html";
    }
  } else {
    confirm = window.confirm("user not find.redicrect to signup page");
    if(confirm){
      window.location.href = "./signup.html";
    }
  }
});
