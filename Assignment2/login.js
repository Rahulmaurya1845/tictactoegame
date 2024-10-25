function login(username, password) {
  if (username === "admin" && password === "12345") {
    console.log("Login successful");
  } else {
    console.log("Invalid credentials");
  }
}

const user = prompt("Enter your username:");
const pass = prompt("Enter your password:");

login(user, pass);
