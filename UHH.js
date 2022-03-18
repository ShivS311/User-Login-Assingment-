 
// Event Listener
document.getElementById("btn").addEventListener("click", main);
 
// Event Function
function main() {
 
// Get Input
let username = document.getElementById('username').value;
let password = document.getElementById('password').value;
 
// Success
if (password == "1234" & username === "admin") {
 alert("Login Successful");
 
 
// Invalid
} else if (password !== "1234" & username === 'admin') {
 alert("Invalid Password")
} else if (username !== 'admin') {
 alert("Invalid Username")
}
 
}
