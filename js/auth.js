const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            document.getElementById("message").textContent =
                "Please enter email and password.";
            return;
        }

        localStorage.setItem("token", "demo-token");
        localStorage.setItem("email", email);
        localStorage.setItem("role", "STUDENT");

        window.location.href = "dashboard.html";
    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("fullName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const role = document.getElementById("role").value;

        if (!name || !email || !password || !role) {
            document.getElementById("registerMessage").textContent =
                "Please fill all fields.";
            return;
        }

        localStorage.setItem("registeredName", name);
        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("role", role);

        alert("Registration successful!");

        window.location.href = "login.html";
    });
}


function logout() {

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");

    window.location.href = "login.html";
}