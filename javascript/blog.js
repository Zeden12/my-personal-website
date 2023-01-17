// //for navigation bar
// let menu = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar')

// menu.onclick = () => {
//   menu.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// };

// window.onscroll = () => {
//   menu.classList.remove('bx-b');
//   navbar.classList.remove('active');
// }

// const sr = ScrollReveal ({
//   distance: '60px',
//   duration: 2500,
//   reset: true
// })

// sr.reveal('.home-text',{delay:200, origin:'top'})
// sr.reveal('.home-img',{delay:400, origin:'top'})
// sr.reveal('.about, .service, .cta, .resume, .contact, .copyright')

const readmore = document.querySelectorAll('.read_more')
    
    function reveal(parent){
    {  
   const hiddenContent = parent.querySelector('.revealmore') 
   hiddenContent.classList.toggle('readmore')
   
  }}
  readmore.forEach(button=>{
    button.addEventListener("click",()=>reveal(button.parentNode))
  })

  const readmore1 = document.querySelector('.read_more1')
  const hiddenContent1 = document.querySelector('.revealmore1')
 
//readmore1.addEventListener("click",reveal)



const blogs = JSON.parse(localStorage.getItem("blogs")) ||[]
//for card 1

const card_title1 = document.getElementById("card_title1");
const card_story1 = document.getElementById("card_story1"); 

let blog1 = blogs[0]  
console.log(blog1)
card_title1.innerHTML= blog1.title
card_story1.innerHTML = blog1.message


const card_title2 = document.getElementById("card_title2");
const card_story2 = document.getElementById("card_story2"); 

let blog2 = blogs[1]  

card_title2.innerHTML= blog2.title
card_story2.innerHTML = blog2.message

const card_title3 = document.getElementById("card_title3");
const card_story3= document.getElementById("card_story3"); 

let blog3 = blogs[2]  

card_title3.innerHTML= blog3.title
card_story3.innerHTML = blog3.message

const card_title4 = document.getElementById("card_title4");
const card_story4= document.getElementById("card_story4"); 

let blog4 = blogs[3]  

card_title4.innerHTML= blog4.title
card_story4.innerHTML = blog4.message

const card_title5 = document.getElementById("card_title5");
const card_story5= document.getElementById("card_story5"); 

let blog5 = blogs[4]  

card_title5.innerHTML= blog5.title
card_story5.innerHTML = blog5.message

const card_title6 = document.getElementById("card_title6");
const card_story6= document.getElementById("card_story6"); 

let blog6 = blogs[5]  

card_title6.innerHTML= blog6.title
card_story6.innerHTML = blog6.message