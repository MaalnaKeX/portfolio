import { about } from "./about.js"

const routes = {
    "": "home.html",
    "about" : "about.html",
    "projects" : "projects.html",
    "404" : "404.html"
}

navigate()

window.addEventListener("hashchange", () => {
    // console.log(window.location.hash)
    navigate()
})

function navigate() {
    let hash = window.location.hash.substring(2)
    let page = routes[hash]
    console.log(page)
    if (!page) {
        loadPage("404.html", document.querySelector("main"))
        return
    } 
    loadPage(page, document.querySelector("main"))
}

async function loadPage(page, obj) {
    const response = await fetch(page)
    const html = await response.text()
    obj.innerHTML = html
    if (page == "about.html") about()
}