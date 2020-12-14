const btnStart = document.createElement('button'),
    btnReset = document.createElement('button'),
    divPeepo = document.createElement('div'),
    peepoClown = document.createElement('img');
let flyInterval = 0;
btnStart.textContent = 'runPeepo';
btnReset.textContent = 'backPeepo';
peepoClown.src = './img/tenor.gif';
peepoClown.width = '200';
divPeepo.style.position = 'relative';


const runAnim = () => {
    const l = parseFloat(divPeepo.style.left);
    if (l < window.innerWidth) {
        divPeepo.style.left = (l + 1) + 'px';
        flyInterval = requestAnimationFrame(runAnim);
    } else {
        cancelAnimationFrame(flyInterval);
        btnStart.textContent = 'runnedPeepo';
        alert('Спасибо за внимание! Для повтора нажмите "Reset"');
    }
};

const startAnim = () => {
    if (btnStart.textContent === 'runPeepo') {
        btnStart.textContent = 'stopPeepo';
        flyInterval = requestAnimationFrame(runAnim);
    } else if (btnStart.textContent !== 'Stoped') {
        btnStart.textContent = 'runPeepo';
        cancelAnimationFrame(flyInterval);
    }
};

const stopAnim = () => {
    if (flyInterval > 0) {
        cancelAnimationFrame(flyInterval);
    }
    divPeepo.style.left = '10px';
    divPeepo.style.top = '615px';
    btnStart.textContent = 'runPeepo';
};

divPeepo.append(peepoClown);
btnStart.addEventListener('click', startAnim);
btnReset.addEventListener('click', stopAnim);
document.body.append(btnStart);
document.body.append(btnReset);
document.body.append(divPeepo);

stopAnim();
