export const errorList = [
  {
    type: "general",
    code: "auth/internal-error",
    message: "Please provide a valid email and password",
  },
  {
    type: "general",
    code: "auth/too-many-requests",
    message:
      "Access to this account has been temporarily disabled due to many failed login attempts",
  },
  {
    type: "general",
    code: "auth/user-not-found",
    message: "Please provide a valid email and password",
  },
  {
    type: "general",
    code: "auth/popup-closed-by-user",
    message: null,
  },
  {
    type: "email",
    code: "auth/invalid-email",
    message: "Invalid email",
  },
  {
    type: "password",
    code: "auth/wrong-password",
    message: "Incorrect password",
  },
];
