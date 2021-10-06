var linkPreviewGenerator = require('link-preview-generator');


const api_url =
    "https://ngeni-live.herokuapp.com/posts";


const output = document.getElementById('output')


async function getapi(url) {
    const response = await fetch(url);
    console.log(data);
    var data = await response.json();
    // console.log(data);

    // output.innerHTML = " ew"

    data.map(result => {
        const blogPost = `<div class="events-container" >
            <div class="event">
            <div class="event-preview">
			<h6>Event</h6>
			<h2></h2>
            <hr>
            <h6>On</h6>
			    <h4>${data.createdAt}</h4>
		    </div>
		    <div class="event-info">
			    <div class="progress-container">
				    <div >${data.title}</div>
			    </div>
			        <h6>Location</h6>
			        <h2>${data.url}</h2>
		</div>v
	</div>
            </div>
        </div>`;

        let outputString = document.createElement('div');
        outputString.innerHTML = blogPost;
        output.appendChild(outputStrin/g);
    });



    // document.getElementById('blogPost').innerHTML = blogPost

    if (response) {
        hideloader();
    }
    show(data);
}

getapi(api_url);

