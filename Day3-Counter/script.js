let counter = 0;
const counterValue = document.getElementById('time');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.querySelector('#reset');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
})

decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
})

resetBtn.addEventListener('click', ()=>{
    counter = 0;
    counterValue.innerHTML= counter;
})