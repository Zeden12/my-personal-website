const blogs_container= document.querySelector(".blogscreated")
  const sendbtn = document.querySelector('.submit');
  const formdata = document.querySelector(".form")
  const title_input = formdata["title"]
  const message_input = formdata["message"]

  const blogs = JSON.parse(localStorage.getItem("blogs")) || []

  const addblog = ( title, message) => {
  blogs.push({
   title,
   message
});
localStorage.setItem("blogs",JSON.stringify(blogs))
return {title,message};


  };

const createblogelement =({title}) =>{
  const blogs_div    =document.createElement("div")
  const font_div    =document.createElement("div")
  const blog_title  =document.createElement("h3")
 const fontablogcontainer =document.createElement("article")
 const publishbtn = document.createElement("button")
 const  deletebtn   = document.createElement("button")
 blogs_div.setAttribute("class","blogdiv")
 font_div.setAttribute("class","fontas")
 publishbtn.innerText = "Post"
 deletebtn.innerText = "delete"

 deletebtn.setAttribute("id","deleting")
 deletebtn.setAttribute("class","deletebtn")
 deletebtn.setAttribute("onclick","deleteBlog(`${index}`)")
 publishbtn.setAttribute("class","publishbtn")

 blog_title.innerText =   title
 
font_div.append(publishbtn,deletebtn)
  blogs_div.append(blog_title);
  blogs_container.appendChild(fontablogcontainer,font_div)
  fontablogcontainer.append(blogs_div)
  fontablogcontainer.appendChild(font_div)

};
blogs.forEach(createblogelement);
formdata.onsubmit = (e) =>{
   e.preventDefault();

   const newBlog = addblog(
   title_input.value,
   message_input.value
   
   )
   createblogelement(newBlog)
   title_input.value = ""
   message_input.value= ""
}

deletebtn = document.querySelector(".deletebtn")


function deleteBlog(index) {
  // Get the current array of blogs from local storage
  let blogs = JSON.parse(localStorage.getItem('blogs'));

  // Remove the blog at the specified index
  blogs.splice(index, 1);

  // Update the blogs in local storage
  localStorage.setItem('blogs', JSON.stringify(blogs))

}