const users = [
    { username: "admin1", 
      password: "123"   
    },
    {
        username: "admin2",
        password: "456"
    }
]



function signIn(form) {
    let inputtedUsername = document.getElementById("username").value;
    let inputtedPassword = document.getElementById("password").value;
    console.log(users);
    users.forEach(user => {
        console.log(user);
        if (inputtedUsername === user.username && inputtedPassword === user.password) {
            console.log("You successfully signed in!");
        } else {
            if (inputtedUsername == null || inputtedUsername == "") {
                console.log("Please Enter username!");
            } else if (inputtedPassword == null || inputtedPassword == "") {
                console.log("Password must be filled.")
            }
            alert("Sorry, wrong username or password. Please try again!");
        }
    })
    
}