
function request()
{
    let dowload = document.createElement("iframe");
    
    dowload.setAttribute("src", "http://localhost:3000/dowload");
    dowload.setAttribute("id", "dash")

    document.getElementById("dowload").appendChild(dowload);

    setTimeout(() => {
        let p = document.getElementById("dash");
        document.getElementById("dowload").removeChild(p);
    }, 100);

}