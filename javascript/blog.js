//get token and set to header
const userToken = localStorage.getItem('userToken');
const header = new Headers();
header.append('Content-Type', 'application/json');
header.append('Authorization', `Bearer ${userToken}`)

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
    const response = await fetch('https://zedart-api.onrender.com/blogs/', {
      method: "GET"
    });
    const blogs = await response.json();
    const cutStr = (val,size)=>{
      let newString = val.split(" ");
      let newArr = newString.slice(0, size);
      let txt = ""
      newArr.forEach((data)=>{
        txt += data + " "
      })
      return txt;
  }
    blogs.forEach((data) =>{
      blogs_container.innerHTML += `<div class="card">
            
      <div class="card_img">
          <img src="${data.image.url}" alt="">
      </div>
      <div class="card_body">
      <p class="date">${data.date}</p>
      <p class="card_author"><a href="https://www.linkedin.com/in/kwizera-haguma-ernest-709195241">${data.author}</a></p>
        <h2 class="card_title"  id ="card_title3">${data.title}</h2>
        <p>${cutStr(data.body,20)}...</p>
        <p class ="revealmore"></p>
        <div class="button">
        <a href="blog2.html?id=${data._id}" class="read_more">Read More</a>
        </div>
    
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
    const response = await fetch(`https://zedart-api.onrender.com/blogs/${blog_id}`, {
      method: "GET"
    });
    const blogs = await response.json();
    
      singleblog.innerHTML = `<div class="oneblog">
          
      
      <div class="card_img">
        <img src="${blogs.image.url}" alt="">
      </div><br>
      <h1>${blogs.title}</h1><br>
      <p>${blogs.body}</p>
      
      
      <div class="gridi" id="blog_side">

      </div>
      </div> `

  }
}

display_1_blogs()

  const likee = document.getElementById("like")
  // if(likee){
   
  //   let like_blog_id = location.href.split('=')[1];
  //   likee.addEventListener("click",async()=>{
  //     const response = await fetch(`https://zedart-api.onrender.com/blogs/${like_blog_id}/like`,{
  //       method: 'PUT',
  //       headers: {'Content-Type': 'application/json'}
  //   }); 
  //     likee.classList.add("like")
  //   })
  // }
let likeQty = document.getElementById("like");
console.log(likeQty)
if (likee) {
  let like_blog_id = location.href.split('=')[1];
    likee.addEventListener("click",async()=>{
        if(userToken === null){
            const coreMsg = 'login first!'
            alert(coreMsg)
        }
        try {
            const response = await fetch(`https://zedart-api.onrender.com/blogs/${like_blog_id}/like`,{
                method: 'PUT',
                headers: header
            });
            const res =  await response.json();
            if(res.status == 'liked'){
                likee.classList.add('liking')
                likee.innerHTML = res.like.count
                console.log(res.like.count)
                // countLike()
            }else if(res.status == 'unliked'){
                likee.classList.remove('liking')
                likee.innerHTML = res.like.count
                // countLike()
                console.log(res.like.count)
            }
        } catch (error) {
            if (localStorage.getItem('userToken')) {
                localStorage.removeItem('userToken');
                location.reload()
            }
        }
    })
}
  


const card_title1 = document.getElementById("card_title1");
const card_story1 = document.getElementById("card_story1"); 






