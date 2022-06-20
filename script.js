const horizontalSlider = document.querySelector('.horizontal.range'),
horizontalSliderNumber = document.querySelector('.horizontal.number'),
verticalSlider = document.querySelector('.vertical.range'),
verticalSliderNumber = document.querySelector('.vertical.number'),
blurSlider = document.querySelector('.blur.range'),
blurSliderNumber = document.querySelector('.blur.number')
spreadSlider = document.querySelector('.spread.range'),
spreadSliderNumber = document.querySelector('.spread.number'),
colorInput = document.querySelector('.color'),
insetInput = document.querySelector('.inset'),
codeBox = document.querySelector('.code-box pre'),
previewBox = document.querySelector('.box'),
copyBtn = document.querySelector('.code-box button')

// Horizontal
horizontalSlider.addEventListener('input', () => {
    horizontalSliderNumber.value = horizontalSlider.value
    createBox()
})
horizontalSliderNumber.addEventListener('input', () => {
    horizontalSlider.value = horizontalSliderNumber.value
    createBox()
})
// Vertical
verticalSlider.addEventListener('input', () => {
    verticalSliderNumber.value = verticalSlider.value
    createBox()
})
verticalSliderNumber.addEventListener('input', () => {
    verticalSlider.value = verticalSliderNumber.value
    createBox()
})
//Blur
blurSlider.addEventListener('input', () => {
    blurSliderNumber.value = blurSlider.value
    createBox()
})
blurSliderNumber.addEventListener('input', () => {
    blurSlider.value = blurSliderNumber.value
    createBox()
})
//Spread
spreadSlider.addEventListener('input', () => {
    spreadSliderNumber.value = spreadSlider.value
    createBox()
})
spreadSliderNumber.addEventListener('input', () => {
    spreadSlider.value = spreadSliderNumber.value
    createBox()
})
//Color
colorInput.addEventListener('input', () => {
    createBox()
})
//Inset
insetInput.addEventListener('click', () => {
    createBox()
})
//Copy Button
copyBtn.addEventListener('click', () => {
    document.querySelector('.snackbar').classList.add('active')
    navigator.clipboard.writeText(document.querySelector('pre').textContent);

    setTimeout(() => {
        document.querySelector('.snackbar').classList.remove('active')
    }, 2000)
})
const createBox = () => {
    let horizontalOffset = horizontalSlider.value;
    let verticalOffset = verticalSlider.value;
    let blurRadius = blurSlider.value;
    let spreadRadius = spreadSlider.value;
    let currentColor = colorInput.value
    let isset = insetInput.checked

    codeBox.innerText = `
    -webkit-box-shadow: ${isset ? 'inset' : ''} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${currentColor};
                         -moz-box-shadow: ${isset ? 'inset' : ''} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${currentColor};
                          box-shadow: ${isset ? 'inset' : ''} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${currentColor};
    `

    previewBox.style.cssText = `box-shadow: ${isset ? 'inset' : ''} ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${currentColor}`;

}

createBox()