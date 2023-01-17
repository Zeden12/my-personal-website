
        const form = document.querySelector(".Form-1")
        
        const loginBtn = document.querySelector(".button1")
        loginBtn.addEventListener( "click",(event)=>{
          event.preventDefault()
          var usersl = JSON.parse(localStorage.getItem('UsersLogin')) || [];
          var accounts = JSON.parse(localStorage.getItem('accounts')) || [];
          var loginData = {
            loginEmail: document.getElementById('Email').value,
            loginname:document.getElementById("Username").value,
            loginPass: document.getElementById('Password').value
          };
          var currentUser = accounts.filter(user => user.email === loginData.loginEmail);
          if(currentUser.length > 0) {
        
            if(currentUser[0].password !== loginData.loginPass) {
        
              alert("wrong password or username")
            }
         else{
        
          
          if(!usersl.some(user => user.email === loginData.loginEmail)) {
              // currently not logged in, so login
              usersl.push(loginData);
              localStorage.setItem('UsersLogin', JSON.stringify(usersl))
              alert("logged in as  "+ loginData.loginname)
              window.location.href="index.html"
              const log = document.querySelector(".log")
              log.innerHTML = "logout"
        
        
           form.reset()
            }
          
            else {
         
            }
          
         }}
          else {
        alert(" User not found first signup")
          }
        });