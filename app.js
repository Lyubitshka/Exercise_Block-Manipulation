window.addEventListener('load', function() {
    let block = document.getElementById('block');
    let scaleCoef = 1;
    let rotateDeg = 0;

    //Position Y 
    let posY = document.getElementById('posY');
    posY.addEventListener('input', function(){
        block.style.top=posY.value + 'px';
    })
    //Position X
    let posX = document.getElementById('posX');
    posX.addEventListener('input', function(){
        block.style.left = posX.value + 'px';
    })
    //SIZE
    let size = document.getElementById('size');
    size.addEventListener('input', function() {
        scaleCoef = size.value;
        block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
    })
    //OPACITY
    let opacity = document.getElementById('opacity');
    opacity.addEventListener('input', function() {
        block.style.opacity = opacity.value;
    })
    //SHAPE
    let selector = document.getElementById('shape-select');
    let okButton = document.getElementById('ok-shape');
    okButton.addEventListener('click', function() {
        let option = selector.value;
        if(option === '1') {
            block.style.borderRadius = '0';
            rotateDeg = 0;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        } else if(option === '2') {
            block.style.borderRadius = '50%';
        } else if(option === '3') {
            block.style.borderRadius = '0';
            rotateDeg = 45;
            block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
        }
    })
// HEX manipulation
    let hex = document.getElementById('hex');
    hex.addEventListener('keyup', function(enter) {
        if(enter.key === 'Enter') {
        block.style.backgroundColor = `#${hex.value}`;
        }
    })
// RGBa MANIPULATION
    let rgbaR = document.getElementById('rgba-r');
    let rgbaG = document.getElementById('rgba-g');
    let rgbaB = document.getElementById('rgba-b');
    let rgbaA = document.getElementById('rgba-a');

    let rgbaInputs = document.querySelectorAll('.rgba-container input')
    
    rgbaInputs.forEach(function(element) {
        element.addEventListener('input', function() {
            block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
    })

    })
})