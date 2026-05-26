function loadpage (page){

    fetch(page)
    .then(Response => Response.text())
    .then(data => {

        document.getElementById("content").innerHTML = data;
    })

}