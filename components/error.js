// class authenticationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "authenticationError";
//     this.favouriteSnack = "grapes";
//   }
// }
// throw new authenticationError("ooopsie");

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favouriteSnack = "grapes";
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "authenticationError";
    this.favouriteSnack = "grapes";
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = "permissionError";
    this.favouriteSnack = "grapes";
  }
}
const a = new AuthenticationError("ooopsie");
a instanceof DatabaseError;
