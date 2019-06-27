let image = document.querySelector(".image")
let num = 0
let numImages = 4
let hero = document.querySelector('.dot-container')

let addDots = () => {
  for(let i = 0; i<numImages; i++){
    let div = document.createElement('div')
    div.classList.add('dot')
    hero.appendChild(div)
  }
}

addDots()
let dots = document.querySelectorAll('.dot')
dots[num].style.background = "lightgray"


let changeImage = () => {
  num !== numImages - 1 ? num++ : num = 0
  let url = `url(./images/hero-image-${num}.jpg)`
  image.style.backgroundImage = url
  dots[num].style.background = "lightgray"
  num !== 0 ? dots[num - 1].style.background = 'black' : dots[numImages - 1].style.background = 'black'
}




setInterval(changeImage, 5000);


