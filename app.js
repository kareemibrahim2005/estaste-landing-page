let navList = document.querySelector('#nav-list');
let menuBtn = document.querySelector('#menu-btn');
let times = document.querySelector('#times');




menuBtn.addEventListener('click', function(){
    navList.style.display = 'flex';
    menuBtn.style.display = "none";
    times.style.display = "block";
});

times.addEventListener('click', function(){
    navList.style.display = 'none';
    menuBtn.style.display = 'flex'
    times.style.display = 'none'
})


