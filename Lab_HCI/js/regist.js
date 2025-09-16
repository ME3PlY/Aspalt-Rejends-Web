const form = document.getElementById("regist-form")
const errormsg = document.getElementById("error")

form.addEventListener("submit", function(e){
    e.preventDefault()

    let first = document.getElementById("first").value
    let last = document.getElementById("last").value
    let email = document.getElementById("email").value
    let date = document.getElementById("date").value
    let pass = document.getElementById("pass").value
    let confirmpass = document.getElementById("confirmpass").value
    let terms = document.getElementById('terms').checked;

    let male = document.getElementById("male").checked
    let female = document.getElementById("female").checked

    let gender = ""
    if(male == true){
        gender = "Male"
    }
    else if(female == true){
        gender = "Female"
    }

    let agree = ""
    if(terms == true){
        agree = "Agreed"
    }else{
        agree = "Not Agree"
    }

    if(first.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "First Name must be filled"
        return
    }

    else if(last.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Last Name must be filled"
        return
    }

    else if(email.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Email must be filled"
        return
    }

    else if(!email.includes('@') || !email.includes('.')){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Email Must be @gmail.com"
        return
    }

    else if(date.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Date of Birth Must be Filled"
        return
    }

    else if(pass.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Password must be filled"
        return
    }

    else if(confirmpass.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Confirm Password must be filled"
        return
    }

    else if(confirmpass != pass){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Password and Confirm Password do not match"
        return
    }

    else if(gender.length == 0){
        errormsg.style.display = "block"
        errormsg.innerHTML = "Gender must be Filled"
        return
    }

    else if(terms == 0) {
        errormsg.style.display = "block"
        errormsg.innerHTML = "You must agree to the terms and conditions"
        return
    }

    else {
        errormsg.style.display = "none"
    }


    console.log("First Name: " +first)
    console.log("Last Name: " +last)
    console.log("Email: " +email)
    console.log("DOB: " +date)
    console.log("Password: " +pass)
    console.log("Confirm Password: " +confirmpass)
    console.log("Gender: " + gender)
    console.log("Terms : " +agree)
})