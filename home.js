export const home = () => {
	let asd = "ArisoftGun_8_405x228.png"
	console.log(asd.substring(0, asd.length-12) + asd.substring(asd.length-4, asd.length));

	document.getElementById("3d").addEventListener("click", (e) => {
		document.getElementById("3d-start").scrollIntoView({ behavior: "smooth" })
	})
    document.querySelectorAll(".image-container").forEach((element) => {
		element.addEventListener("click", (e) => {
			if (e.target.nodeName == "IMG") {
				document.getElementById("selected-image").src = e.target.src.substring(0, e.target.src.length-12) + e.target.src.substring(e.target.src.length-4, e.target.src.length)
				document.getElementById("selected-image").focus()
				document.getElementById("overlay").classList.remove("opacity-0")
				document.getElementById("overlay").classList.add("opacity-100")
				document.getElementById("overlay").classList.remove("pointer-events-none")
				document.querySelector(".pointer-events-auto").classList.add("cursor-pointer")
			}
		})
	})
		

}