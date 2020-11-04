window.onload = function(){
    let btn = document.querySelector('#signIn');
    btn.onclick = function(){
        window.open('main.html','Вітаємо!');
        window.close('index.html');
    }
}