for(let i = 0; i<3; i++){
    document.querySelectorAll('a')[i].addEventListener("click", function(){
        document.querySelector('input').checked=false;
    })
}