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

const display_blogs = async() =>{
  const blogs_container = document.getElementById("blog-container");
  if(blogs_container){
    const response = await fetch('http://localhost:5700/blogs/', {
      method: "GET"
    });
    const blogs = await response.json();
    blogs.forEach((data) =>{
      blogs_container.innerHTML += `<div class="card">
            
      <div class="card_img">
          <img src="/assets/sport.blog.jpeg" alt="">
      </div>
      <div class="card_body">
      <p class="date">${data.date}</p>
          <h2 class="card_title"  id ="card_title3">${data.title}</h2>
          <p id = "card_story3">${data.body}</p>
          <p class ="revealmore"></p>
          <a href="blog2.html?id=${data._id}" class="read_more">Read More</a>
        
      </div>
      </div> `
    })
  }
}

display_blogs()

const display_1_blogs = async() =>{
  const singleblog = document.getElementById("singleblog");
  if(singleblog){
    let blog_id = location.href.split("=")[1];
    const response = await fetch(`http://localhost:5700/blogs/${blog_id}`, {
      method: "GET"
    });
    const blogs = await response.json();
    
      singleblog.innerHTML = `<div class="oneblog">
            
      <div class="card_img">
          <img src="/assets/sport.blog.jpeg" alt="">
      </div>
      <h1>${blogs.title}</h1>
      <p>${blogs.body}</p>
      </div> `

  }
}

display_1_blogs()
//for card 1

const card_title1 = document.getElementById("card_title1");
const card_story1 = document.getElementById("card_story1"); 

// let blog1 = blogs[0]  
// console.log(blog1)
// card_title1.innerHTML= blog1.title
// card_story1.innerHTML = blog1.message




