
const Mario = document.querySelector('.Mario');
const pipe2 = document.querySelector('.pipe2');


const jump = () => {
    Mario.classList.add('jump');

        setTimeout(() => {

            Mario.classList.remove('jump');

        }, 500);
}

    const loop = setInterval (() => {
        const pipe2Position = pipe2.offsetLeft;
        const MarioPosition = +window.getComputedStyle(Mario).bottom.replace('px', ' ');


        if (pipe2Position <= 45 && pipe2Position > 0 && MarioPosition < 80) {

            pipe2.style.animation = 'none';
            pipe2.style.left = `${pipe2Position}px`;

            Mario.style.animation = 'none';
            Mario.style.bottom = `${MarioPosition}px`;

            Mario.src = './imagem/Gameover.png';
            Mario.style.width = '100px'
            Mario.style.marginLeft = '50px'

            clearInterval(Loop)
        }
    }, 10)



document.addEventListener('keydown', jump);
