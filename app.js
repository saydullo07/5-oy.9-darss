const form = document.querySelector("form")

const data=[{}, {}, {},]

form.addEventListener("sumbit",(e)=>{
e.preventDefault();
const newUser ={
    name:form.name.value,
    phoneNumber:form["phone-number"].value,
    userImage: form.image.value,
    email: form.email.value,
}

console.log(newUser)
})