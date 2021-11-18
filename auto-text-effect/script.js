const text_add = document.getElementById('text')
const speed_add = document.getElementById('speed')
const text = 'HTML CSS JAVASCRİPT!'
let sayac = 1
let speed = 300 / speed_add.value

writeText()

function writeText() {

    text_add.innerText = text.slice(0, sayac)
    sayac++
    if (sayac > text.length) { // return as text length
        sayac = 1 //stop when done. start from 1
    }

    setTimeout(writeText, speed)
}

speed_add.addEventListener('input', (e) => speed = 300 / e.target.value)