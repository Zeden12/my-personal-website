const adminToken = JSON.parse(localStorage.getItem('adminToken'));
if (adminToken == null) {
window.location.replace('../login.html');
}
// logout
const logout = document.querySelector('.logout');
logout.addEventListener('click',()=>{
    localStorage.removeItem('adminToken');
    window.location.replace('../login.html');
})


const displayMessages = async()=> {
    const tbody = document.getElementById('message_body');
const response = await fetch('https://zedart-api.onrender.com/messages', {
method: "GET"
});
const messages = await response.json();

let no = 1;
messages.forEach((data) => {
                id = JSON.stringify(data._id);
                tbody.innerHTML += `
                <tr>
                    <td>${no++}</td>
                    <td>${data.username}</td>
                    <td>${data.email}</td>
                    <td>${data.idea}</td>
                    <td class="pedding">
                        <a href="#" onclick = 'messageDelete(${id})'>delete</a>
                    </td>
                </tr>
                `;
            });


}

displayMessages();

async function messageDelete(id){
    try {
        const response = await fetch(`https://zedart-api.onrender.com/messages/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        })
        console.log(response)
        const del = await response.json();
        if (response.status == 200){
            alert("Message deleted successfully!");
            location.reload()
        }
        else(console.log(del))
    } catch (error) {
        console.log(error)
    }
    
}


