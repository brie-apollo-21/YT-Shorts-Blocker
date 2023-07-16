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
function searchPage() {
    let title = document.getElementsByTagName("ytd-reel-shelf-renderer");
    let videos = document.querySelectorAll("ytd-thumbnail-overlay-time-status-renderer[overlay-style='SHORTS']");
    let ads = document.getElementsByTagName("ytd-ad-slot-renderer");
    for(let i = 0; i < title.length; i++) {
        title[i].innerHTML = "";
        title[i].style.display = "none";
    }
    for(let i = 0; i < ads.length; i++) {
        ads[i].innerHTML = "";
        ads[i].style.display = "none";
    }
    for(let i = 0; i < videos.length; i++) {
        let short = videos[i].parentElement.parentElement.parentElement.parentElement.parentElement;
        short.innerHTML = "";
        short.style.display = "none";
    }
}
function purge() {
    if(window.location.href.includes("/watch")) {
        videoPage();
    } else if(window.location.href.includes("/results")) {
        searchPage();
    } else if (window.location.href === "https://www.youtube.com/") {
        homePage();
    }
}

purge();

document.addEventListener("scroll", () => {
    purge();
})

document.addEventListener("load", () => {
    purge();
});