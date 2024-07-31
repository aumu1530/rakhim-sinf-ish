const inp = document.querySelectorAll('.colors input')
const gradientBox = document.querySelector('.gradient-box')
const selectMenu = document.querySelector('.select-box select')
const body = document.body
const textarea = document.querySelector('textarea')
const copyBtn = document.querySelector('.copy')

function generateGradient(){
    const gradient = `linear-gradient(${selectMenu.value}, ${inp[0].value}, ${inp[1].value})`

    gradientBox.computedStyleMap.backgraund = gradient
    body.style.background = gradient
    textarea.value = `background: ${gradient}`
}

inp.forEach((el) => {
    el.addEventListener('input', generateGradient)
})

function copyCode() {
    navigator.clipboard.writeText(textarea.value)
    cobyBtn.innerText = 'Code Copied'

    setTimeout(() => (copyCode.innerText = 'Copy Code'), 2000)
}

selectMenu.addEventListener('change', generateGradient)
copyBtn.addEventListener('click', copyCode)
