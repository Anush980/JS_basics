// Dummy stored users
const dummyUser = [
  {
    username: "anush",
    email: "anushji@gmail.com",
    password: "randomshit"
  },
  {
    username: "manush",
    email: "manushji@gmail.com",
    password: "mandomshit"
  }
];

const form = document.getElementById("loginForm");
const msg = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Empty field check
  if (!username || !email || !password || !confirmPassword) {
    msg.style.color = "red";
    msg.textContent = "All fields are required!";
    return;
  }

  // Password match check
  if (password !== confirmPassword) {
    msg.style.color = "red";
    msg.textContent = "Passwords do not match!";
    return;
  }

  // Match against array of users
  const foundUser = dummyUser.find(user =>
    user.username === username &&
    user.email === email &&
    user.password === password
  );

  if (foundUser) {
    msg.style.color = "green";
    msg.textContent = `Welcome ${foundUser.username}!`;
  } else {
    msg.style.color = "red";
    msg.textContent = "User not found!";
  }
});
