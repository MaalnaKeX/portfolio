export const home = () => {
    document.getElementById("3d").addEventListener("click", (e) => {
        document.getElementById("3d-start").scrollIntoView({ behavior: "smooth" })
    })
}