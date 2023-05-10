function homePage() {
    let shorts = document.querySelectorAll("[is-shorts]");
    for(let i = 0; i < shorts.length; i++) {
        shorts[i].innerHTML = "";
        shorts[i].style.display = "none";
    }
}
function videoPage() {
    let title = document.getElementsByTagName("span");
    for(let i = 0; i < title.length; i++) {
        if(title[i].innerHTML === "Shorts" && title[i].id === "title") {
            let shorts = title[i].parentElement.parentElement.parentElement;
            shorts.innerHTML = "";
            shorts.style.display = "none";
        }
    }
}
function purge() {
    if(window.location.href.includes("/watch")) {
        videoPage();
    } else if (window.location.href === "https://www.youtube.com/") {
        homePage();
    }
}

purge();

document.addEventListener("scroll", () => {
    purge();
})