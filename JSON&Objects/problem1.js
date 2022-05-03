let user = {
    name: "Ramesh",
    email: "ramesh@gmail.com",
    password: "myPassword",
    authentication: function (email, password) {
        console.log(this.email, password);
        if (email === this.email && password === this.password) {
            console.log("user authenticated");
        } else {
            console.log("authentication failed");
        }
    }
}

user.authentication("ram@gmail.com", "myPassword");
user.authentication("ramesh@gmail.com", "Password");
user.authentication("ramesh@gmail.com", "myPassword");