const api_url =
    "https://ngeni-live.herokuapp.com/posts";


async function getapi(url) {

    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

   
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
function show(data) {
    let tab =
        ``
        ;
    for (let r of data) {
        tab += `
 <div class="container-fluid">
        
    <div class="event row">
        <div class="event-preview col-sm-10 col-md-11">
            <h7>What I was reading</h7>
            <h2>${r.comment}</h2>
       
              <hr>
            <h2><a href="${r.link}">${r.link}</a></h2>
            <div class="bt">
            <a type="button" class="btn btn-info text-center" href="${r.link}" target="_blank" >Find Out More</a>
            </div>
        </div>

        <div class="event-info col-sm-2 col-md-1" >
            <h6 class="text-center">Posted On</h6>
            <p>${new Date(r.createdAt.toString('M/dd/yyyy'))} </p>
        </div>
    </div>
</div>

`;    
    }
    document.getElementById("output").innerHTML = tab;
}