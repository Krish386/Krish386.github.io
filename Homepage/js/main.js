const tl= gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text',{y:'0%', duration: 2, stagger: 0.2});
tl.to('.slider',{y:'-100%', duration:1.5, delay:0.5});
tl.to('.intro',{y:'-100%', duration:1}, '-=1')
tl.fromTo('.title', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'});
tl.fromTo('.logo', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');
tl.fromTo('.quote', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');
tl.fromTo('.sub_title', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');

//Vector layers
tl.fromTo('.layer7', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=1')
tl.fromTo('.layer6', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.8')
tl.fromTo('.layer5', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.75')
tl.fromTo('.layer4', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.65')
tl.fromTo('.layer3', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.6')
tl.fromTo('.layer2', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.6')
tl.fromTo('.layer1', {opacity: 0,y:'50%'}, {opacity: 1, duration: 1, y:'0%'}, '-=0.7')

function scrollTo() {
    window.scrollTo(0,1500);
    document.addEventListener('scroll',scrollTo);
}








