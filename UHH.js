// Login In Form 


// Event listener
document.getElementById('btn').addEventListener('click', main);

// Function
function main() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Sucess
    if (username == 'admin' & password == '1234') {
        alert('Sign In Successful');
    
    // Wrong
    } else{
        alert('Sign In Unsuccessful')
        document.getElementById('greet').innerHTML = 'Wrong username and/or password. Please try again.';
        document.getElementById('greet').style.color = 'red';

    }
}