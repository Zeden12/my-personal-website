// // Get form elements
// const form = document.querySelector('form');
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const messageInput = document.getElementById('message');

// // Check if messages already exist in local storage
// let messages = JSON.parse(localStorage.getItem('messages')) || [];

// // Add event listener to form submit
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   alert("message sent! thank you for chat with us..!")

//   // Get form data
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const message = messageInput.value;

//   // Create new message object
//   const newMessage = {
//     name,
//     email,
//     message,
//   };

//   // Add new message to array
//   messages.push(newMessage);

//   // Save messages to local storage
//   localStorage.setItem('messages', JSON.stringify(messages));

//   // Clear form fields
//   nameInput.value = '';
//   emailInput.value = '';
//   messageInput.value = '';
// });

  
// const sendbtn = document.querySelector('.button');

// let  messages = localStorage.getItem("messages")
// if( messages == null){
//   messages =[]
// }
// else{
//   messages = JSON.parse(messages)
//  }
// sendbtn.addEventListener('click', (event) => {
 
//  event.preventDefault();

//  const email = document.querySelector('#email').value;
//  const name = document.querySelector('#name').value;
//  const issue = document.querySelector('#message').value;

//  var message = {
//    email,name,message
//  }
//   messages.push(message)
// localStorage.setItem("messages",JSON.stringify(messages)),
 
//  message.clear()
//  name.clear()
//  email.clear()

// });

