const card = document.getElementsByClassName('.card')
let button = document.querySelector('button')
const h5 = document.querySelector('h5')
const p = document.querySelector('p')
let img = document.getElementsByTagName('img')
button.addEventListener('click', getComment)
async function getComment(){
    const response = await fetch('https://quotable.io/random')
    const data = await response.json()
    const comments = data.content
    const author = data.author
    h5.innerText = comments
    p.innerText = author
    // console.log(data) 
}
setInterval(()=>{
    getComment()
},3000)

