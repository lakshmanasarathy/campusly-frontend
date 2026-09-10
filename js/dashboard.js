const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const email = localStorage.getItem("email");
const role = localStorage.getItem("role");

const userInfo = document.getElementById("userInfo");

if (userInfo) {
    userInfo.textContent =
        "Logged in as " + (email || "Student") +
        " • Role: " + (role || "STUDENT");
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}

function comingSoon(moduleName) {
    alert(moduleName + " 🚀\n\nComing Soon!");
}