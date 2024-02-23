// const randint = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min
// }

export const about = () => {
    // document.getElementById("rand").innerHTML = randint(500, 510)
    document.querySelector(".clickable").addEventListener("click", (e) => {
      document.getElementById("languages").scrollIntoView({ behavior: 'smooth' })
    })
    
}