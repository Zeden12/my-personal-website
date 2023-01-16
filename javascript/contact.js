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

// Get form elements
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Check if messages already exist in local storage
let messages = JSON.parse(localStorage.getItem('messages')) || [];

// Add event listener to form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  alert("message sent! thank you for chat with us..!")

  // Get form data
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Create new message object
  const newMessage = {
    name,
    email,
    message
  };

  // Add new message to array
  messages.push(newMessage);

  // Save messages to local storage
  localStorage.setItem('messages', JSON.stringify(messages));

  // Clear form fields
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});