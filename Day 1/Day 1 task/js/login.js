const logIn = document.getElementById("login")
const email = document.getElementById("email")
const password = document.getElementById("password")
const span = document.querySelector("span")

// console.log("login",logIn);


logIn.addEventListener("click",(e) => {
    e.preventDefault()
    
    if(email.value.length == 0 || password.value.length == 0){
      return span.innerText = "please provide all fields"
    }
    const users = JSON.parse(localStorage.getItem("users")) ;

    const user = users.find((user) => user.email == email.value)

    if(user.password == password.value && user.email == email.value){
        window.location.href = "./home.html"
        document.cookie = `firstname=${user.firstName}`
    }else{
        span.innerText = "invalid cradantials"
    }
})


