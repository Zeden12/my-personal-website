let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-b');
  navbar.classList.remove('active');
}

const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  reset: true
})

sr.reveal('.home-text',{delay:200, origin:'top'})
sr.reveal('.home-img',{delay:400, origin:'top'})
sr.reveal('.about, .service, .cta, .resume, .contact, .copyright')


const form = document.getElementById("login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const enteredUsername = form.elements.username.value;
  const enteredPassword = form.elements.password.value;

  // Get the current user data array from local storage
  let userData = JSON.parse(localStorage.getItem("userData")) || [];

  // Check if the entered data is already stored
  let isUserExist = false;
  for (let i = 0; i < userData.length; i++) {
    if (enteredUsername === userData[i].username) {
      isUserExist = true;
      break;
    }
  }

  if (!isUserExist) {
    // Add the new user data to the array
    userData.push({ username: enteredUsername, password: enteredPassword });
    // Store the updated user data array in local storage
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    // Check if the entered data matches any stored data
    let isAuthenticated = false;
    for (let i = 0; i < userData.length; i++) {
      if (enteredUsername === userData[i].username && enteredPassword === userData[i].password) {
        isAuthenticated = true;
        break;
      }
    }

    // Give an alert if the entered data does not match any stored data
    if (!isAuthenticated) {
      alert("Invalid username or password. Please try again.");
    }
  }
});