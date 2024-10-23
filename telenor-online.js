// This script creates a cookie if the user clicks on the login button. No framework or backend used. Made by Szeccsa.
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function handleLoginButtonClick(event) {
    event.preventDefault();
    setCookie("tolid", "0", 7); // Stay logged in for 7 days
    location.reload();
}

function handleLogoutClick(event) {
    event.preventDefault();
    deleteCookie("tolid"); // Delete the cookie
    location.reload();
}

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("login");
    if (loginButton) {
        loginButton.addEventListener("click", handleLoginButtonClick);
    }

    const logoutButtons = ['logout0', 'logout1', 'logout2'];
    logoutButtons.forEach(function(logoutId) {
        const logoutButton = document.getElementById(logoutId);
        if (logoutButton) {
            logoutButton.addEventListener("click", handleLogoutClick);
        }
    });
});
