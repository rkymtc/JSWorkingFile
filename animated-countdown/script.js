
//atama işlemleri için htmlden verileri çekiyoruz
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation() // sayıları hareketlendirme

function resetDOM() { //tekrar başlatmak için
  counter.classList.remove('hide')// gizle
  finalMessage.classList.remove('show')//göster

  nums.forEach((num) => {
    num.classList.value = ''//boş döndürüyoruz.. üst üste gelmemesi için
  })
  nums[0].classList.add('in')//daha sonra üçten başlatıyoruz
}

function runAnimation() {// hareket ettirme
  nums.forEach((num, idx) => { 
    const nextToLast = nums.length - 1 //her dizinin boyutu 1 eksileterek tutuyoruz.

    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && idx !== nextToLast) { //
        num.classList.remove('in')
        num.classList.add('out')
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in')
      } else {
        counter.classList.add('hide')
        finalMessage.classList.add('show')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})
