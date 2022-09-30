function show(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
show();
let tl = gsap.timeline();


tl.from('.p1content h1', {
    x:-1000,
    opacity:0,
    Duration: 0.50
})
tl.from('nav',{
    y:200,
    delay:1
    
})
tl.from('.p1content h4', {
    opacity:0,
    
})



gsap.from('.page2 h1',{
    opacity:0,
    duration:1,
    
   

    scrollTrigger:{
        trigger: '.page2 h1',
        scroller: '.main',
        scrub:true,
       

    },
  
    onStart: function(){
        $('.page2 h1').textillate({ in: { effect: 'swing' } })

    }
    
})

const arrow = document.querySelector('.arrow');
const arrow2 = document.querySelector('.arrow2');
const menu = document.querySelector('.box');
const main = document.querySelector('.page1');

menu.addEventListener('click', function(){
    main.classList.add('sidebar')
})


const scroller = document.querySelector('.scroll');

arrow.addEventListener('click', function (){
    scroller.classList.add('slide');
    scroller.classList.remove('slide2');
    
})
arrow2.addEventListener('click', function (){
    scroller.classList.add('slide2');
    scroller.classList.remove('slide');
    
    
})
gsap.from('.page3 .curve',{
    opacity: 0,
    duration: 1,
    scrollTrigger:{
        trigger:'.page3 .curve',
        scroller: '.main',
        scrub: true
    }

})
gsap.from('.page3 .downarrow',{
    y: -20,
    yoyo:true,
    duration: .5,
    repeat: -1,
   

})
const curve = document.querySelector('.curve');
const button = document.querySelector('.downarrow');
const down = document.querySelector('.downcurve');


button.addEventListener('click', function() {
    curve.classList.add('downcurve');
    const button = document.querySelector('.downarrow').style.display = 'none';
    const down = document.querySelector('.downcurve').innerHTML = `     
    <div class="first">
        <h2>More About Hailey</h2>
    <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br> Voluptatem fugiat error excepturi quidem, velit eos quasi, quisquam <br> aperiam nulla minus magni similique in dolores. Repellat.</h4>

    </div>
    <div class="second">
        <h2>Find us on</h2>

        <img src="icons8-facebook-60.png" alt="">
        <img src="icons8-twitter-60.png" alt="">
        <img src="icons8-instagram-60.png" alt="">
    </div>
    <div class="third">
        <h2>Contact Us</h2> <br>
        <h4>Hailey Comics</h4> <br>
        <h4>123 xvz Plaza,</h4> <br>
        <h4>Los Angeles</h4> <br>
        <h4>123456789</h4> <br>
        <h4>johndoe@gmail.com</h4> <br>

    </div>
    

`
   
  
    
})