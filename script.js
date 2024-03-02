const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconanim(){
let videocon =  document.querySelector('#video-container');
let playbtn = document.querySelector('#play');
videocon.addEventListener('mouseenter', function(){
    gsap.to(playbtn, {
        opacity:1,
        scale:1,
    })
})

videocon.addEventListener('mouseleave', function(){
    gsap.to(playbtn, {
        opacity:0,
        scale:0,
    })
})

videocon.addEventListener('mousemove', function(dets){
    gsap.to(playbtn, {
        left:dets.x-50,
        top:dets.y-60,
    })
})
}
videoconanim();

function loadinganim(){
    gsap.from('#page1 h1',{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from('#video-container',{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.3
    })
}
loadinganim();