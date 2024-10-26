class AuthModule {
  constructor() {
    this.validCredentials = {
      user1: "password1",
      user2: "password2",
    };
  }

  login(username, password) {
    try {
      if (!username) {
        throw new Error("Username is required.");
      }
      if (!password) {
        throw new Error("Password is required.");
      }
      if (
        !this.validCredentials[username] ||
        this.validCredentials[username] !== password
      ) {
        throw new Error("Invalid username or password.");
      }
      console.log("Login successful.");
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    console.error(`Error: ${error.message}`);
  }
}

const auth = new AuthModule();
auth.login("user1", "password1");
auth.login("", "password1");
auth.login("user1", "");
auth.login("user3", "password3");
