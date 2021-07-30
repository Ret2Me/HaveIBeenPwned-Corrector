document.addEventListener('change', (event) => {
    title = document.getElementsByClassName("pwnTitle")

    title[0].getElementsByTagName("h2")[0].innerHTML = "Not this time :("
    document.getElementById("noPwnage").style.background = "linear-gradient(135deg,#320f0f 0,#ba4343 100%)"
    
    title[1].getElementsByTagName("h2")[0].innerHTML = "YEAH PWNED!!!"
    document.getElementsByClassName("pwnedRow")[0].style.background = "linear-gradient(135deg,#0f3212 0,#348f38 100%)"
    document.getElementsByClassName("pwnedRow")[1].style.background = "linear-gradient(135deg,#0f3212 0,#348f38 100%)"
})