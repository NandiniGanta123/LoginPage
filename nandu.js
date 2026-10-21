// REGISTER

document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let roll = document.getElementById("registerRoll").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    // if (roll == "" || password == "" || confirmPassword == "") {
    //     alert("Please fill all fields");
    //     return;
    // }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let users = localStorage.getItem("instagramUsers");

    if (users == null) {
        users = {};
    } else {
        users = JSON.parse(users);
    }

    // if (users[roll]) {
    //     alert("User already exists");
    //     return;
    // }

    users[roll] = {
        rollNumber: roll,
        password: password
    };

    localStorage.setItem("instagramUsers", JSON.stringify(users));

    alert("Registration Successful");

    document.getElementById("registerForm").reset();
});


// LOGIN

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let roll = document.getElementById("loginRoll").value;
    let password = document.getElementById("loginPassword").value;

    if (roll == "" || password == "") {
        alert("Enter Roll Number and Password");
        return;
    }

    let users = localStorage.getItem("instagramUsers");

    if (users == null) {
        alert("No registered users found");
        return;
    }

    users = JSON.parse(users);

    if (!users[roll]) {
        alert("Roll Number not found");
        return;
    }

    if (users[roll].password == password) {
        alert("Login Successful");
        document.getElementById("loginForm").reset();
    } else {
        alert("Incorrect Password");
    }
});


// FORGOT PASSWORD

document.getElementById("forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let roll = document.getElementById("forgotRoll").value;
    let newPassword = document.getElementById("forgotPassword").value;
    let confirmPassword = document.getElementById("forgotConfirmPassword").value;

    if (roll == "" || newPassword == "" || confirmPassword == "") {
        alert("Please fill all fields");
        return;
    }

    if (newPassword != confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let users = localStorage.getItem("instagramUsers");

    if (users == null) {
        alert("No users found");
        return;
    }

    users = JSON.parse(users);

    if (!users[roll]) {
        alert("Roll Number not found");
        return;
    }

    users[roll].password = newPassword;

    localStorage.setItem("instagramUsers", JSON.stringify(users));

    alert("Password Changed Successfully");

    document.getElementById("forgotForm").reset();
});


// TAB SWITCHING

function showForm(formName) {

    document.getElementById("loginFormBox").style.display = "none";
    document.getElementById("registerFormBox").style.display = "none";
    document.getElementById("forgotFormBox").style.display = "none";

    if (formName == "login") {
        document.getElementById("loginFormBox").style.display = "block";
    }

    if (formName == "register") {
        document.getElementById("registerFormBox").style.display = "block";
    }

    if (formName == "forgot") {
        document.getElementById("forgotFormBox").style.display = "block";
    }
}