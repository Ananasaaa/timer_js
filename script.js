const h1 = document.createElement('h1');
h1.textContent = 'Timer';
h1.style.fontSize = '40px'
h1.style.textAlign = 'center';
document.body.appendChild(h1);

const timer = document.createElement('div');
timer.style.textAlign = 'center';
timer.style.fontSize = '40px';
timer.style.marginBottom = '20px'
document.body.appendChild(timer);

let time = 0;
const stop = 85;

const interval = setInterval(updateCount, 1000);

function updateCount() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `${minutes}:${seconds}`; 
    
    if(time >= stop) {
        clearInterval(interval);
    } else {
        time++;
    }
}