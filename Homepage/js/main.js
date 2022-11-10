const tl= gsap.timeline({defaults:{ease: 'power1.out'}});

tl.to('.text',{y:'0%', duration: 2, stagger: 0.2});
tl.to('.slider',{y:'-100%', duration:1.5, delay:1.5});
tl.to('.intro',{y:'-100%', duration:1}, '-=1')
tl.fromTo('.title', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'});
tl.fromTo('.logo', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');
tl.fromTo('.scroll-down', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');
tl.fromTo('.quote', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');
tl.fromTo('.sub_title', {opacity: 0, y:'50%'}, {opacity: 1, duration: 1, y:'0%'} ,'-=1');

var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick =function(){
  if(mySong.paused){
    mySong.play();
    icon.src = ""
  }else{
    mySong.pause();
    icon.src = ""
  }
}








