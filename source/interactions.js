
function request()
{
    let dowload = document.createElement("iframe");
    
    dowload.setAttribute("src", "https://atualiza-es.onrender.com/dowload");
    dowload.setAttribute("id", "dash")

    document.getElementById("dowload").appendChild(dowload);

    setTimeout(() => {
        let p = document.getElementById("dash");
        document.getElementById("dowload").removeChild(p);
    }, 1000);

}