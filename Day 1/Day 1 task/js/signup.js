const signUp = document.getElementById("signUp") 
const form = document.querySelectorAll("input")
const city = document.getElementById("city")
const radio = document.querySelectorAll(".gender")
const hobbies = document.querySelector("textarea")

signUp.addEventListener("click",(e) => {
    e.preventDefault()
    let users = JSON.parse(localStorage.getItem("users")) || []
    let user = {}
    
    
    form.forEach((i) => {
        if(i.type != "radio"){
            // console.log(i.name,":",i.value);
            user = {...user,[i.name]:i.value}
        }
    })

    radio.forEach((i) => {
        if(i.checked){
            // console.log(i.name,":",i.value);
            user = {...user,[i.name]:i.value}
        }
    })

    // console.log(city.name,":",city.value);
    user = {...user,[city.name]:city.value,"hobbies":hobbies.value}

    console.log(user);
    users.push(user)
    console.log(users);
    
    localStorage.setItem("users",JSON.stringify(users))

    window.location.href = "./home.html"
    document.cookie = `firstname=${user.firstName}`

})