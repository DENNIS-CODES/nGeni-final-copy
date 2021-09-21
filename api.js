
// api url
const api_url = 
      "https://ngeni-live.herokuapp.com/posts";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<table>
        <tr>
          <th>What it is</th>
          <th>Link</th>
          <th>Updated At</th>
          
          

         </tr></table>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<table><tr> 
    
    <td>${r.comment}</td> 
    <td><a href="${r.link}">${r.link}</a></td>
    <td>${new Date(r.createdAt.toString('M/dd/yyyy')) } </td>
</tr></table>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}