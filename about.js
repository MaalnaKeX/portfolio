// const randint = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min
// }

export const about = () => {
    // document.getElementById("rand").innerHTML = randint(500, 510)
    document.querySelectorAll(".clickable").forEach((e) => {e.addEventListener("click", scrollInto)})
    function scrollInto(id) {
      console.log(id);
      document.getElementById("languages").scrollIntoView()
    }
}