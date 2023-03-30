const balas = document.getElementById('balas')
const extra = document.getElementById('extra')
const btn = document.getElementById('btn')
const reload = document.getElementById('reload')

let balasNum = 10
let extraNum = ''

const recargaAuto = () => {
  balasNum = 10
  balas.textContent = balasNum
  balas.style.color = 'greenyellow'
}

const recargaManual = () => {
  if (balasNum > 0) {
    balasNum = 10
    balas.textContent = balasNum
    extraNum = 1
    extra.textContent = `+ ${extraNum}`
    balas.style.color = 'greenyellow'
  } else {
    balasNum = 10
    balas.textContent = balasNum
    extraNum = ''
    extra.textContent = extraNum
    balas.style.color = 'greenyellow'
  }
}

const disparo = () => {
  if (extraNum !== 1) {
    if (balasNum > 0) {
      balasNum--
      balas.textContent = balasNum
      balasNum === 0
        ? (balas.style.color = 'red')
        : (balas.style.color = 'greenyellow')
    } else {
      recargaAuto()
    }
  } else if (extraNum === 1) {
    extraNum = ''
    extra.textContent = extraNum
    if (balasNum === 10) {
      balas.textContent = balasNum
    } else if (balasNum > 0) {
      balasNum--
      balas.textContent = balasNum
      balasNum === 0
        ? (balas.style.color = 'red')
        : (balas.style.color = 'greenyellow')
    } else {
      recargaAuto()
    }
  }
}

btn.addEventListener('click', disparo)
reload.addEventListener('click', recargaManual)
