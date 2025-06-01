const toggleEl = document.getElementById('toggleDark');

const bodyEl = document.querySelector('body');

toggleEl.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        bodyEl.style.background = 'white';
        bodyEl.style.color = 'black';
        bodyEl.style.transition = '2s';
    }else{
        bodyEl.style.background = 'black';
        bodyEl.style.color = 'white';
        bodyEl.style.transition = '2s';
    }
});