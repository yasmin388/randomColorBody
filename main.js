let btn = document.querySelector("#btn");

btn.addEventListener('click',randombg );

function randombg(){
    document.body.style.backgroundColor = '#' + Math.random().toString(16).slice(2,8);
};