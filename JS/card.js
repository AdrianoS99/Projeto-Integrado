const container = document.querySelector('.container')
document.querySelector(".image-slider").addEventListener('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
})