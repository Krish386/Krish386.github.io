//Counter animation
const counters = document.querySelectorAll('.num');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-val');
        const c = +counter.innerText;
        const increment = target/400;

        if (c<target) {
            counter.innerText = `${Math.ceil(c+increment)}`;
            setTimeout(updateCounter, 1);
        }
        else {
            counter.innerText = target;
        }
    }
    window.onscroll = function() {myFunction()};

    function myFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            updateCounter();
        }
    }
    
});

const count = document.querySelector('.num')



//On scroll animation
const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.wrapper,.paragraph');
hiddenElements.forEach((el) => observer.observe(el));

//Sticky Navbar
window.addEventListener('scroll',function(){
    let header = document.getElementById('header');

    if(window.pageYOffset > 0){
        header.classList.add('navbar');
    } else {
        header.classList.remove('navbar');
    }
})