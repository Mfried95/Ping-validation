 const email = document.getElementById("email")
 const form = document.getElementById("form")
 const errorElelment = document.getElementById("error")



 form.addEventListener('submit', (e) => {
     let messages = []
     if (email.value === '' || email.value == null){
         messages.push('Name is required')
         email.style.border = "solid 3px red"
     }

     if (messages.length > 0){
        e.preventDefault()
        errorElelment.innerText = messages.join(',')
     }
   

 })