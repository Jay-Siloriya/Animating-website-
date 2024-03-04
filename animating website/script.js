function nav() {
    gsap.to(".nav",{
        backgroundColor:"#000",
        duration:0.5,
        height:"110px",
        scrollTrigger:{
            trigger:".nav",
            scroller:"body",
            // markers:true,
            start:"top -10%",
            end:"top -11%",
            scrub:3
        }
    })
    
}
nav();
function page() {
    gsap.to(".main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            start:"top -20%",
            end:"top -50%",
            scrub:3
        }
    })
    
}
page();

var crsr = document.querySelector(".cursor");
var blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+ +30 +"px"
    crsr.style.top = dets.y +"px"
    blur.style.left = dets.x -100 + "px"
    blur.style.top = dets.y -100 +"px"
    
})

var h4all = document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
       elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
       })
       elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor = "#95C11E"
       })
})

gsap.from("#colam1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colam1",
        scroller:"body",
        start:"top 80%",
        end:"top 80%",
        scrub:1
    }
})

gsap.from("#colam2",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colam2",
        scroller:"body",
        start:"top 100%",
        end:"top 100%",
        scrub:1
    }
})

gsap.from(".page5 h1", {
  y: 50,
  scrollTrigger: {
    trigger: ".page5",
    start: "top 50%",
    end: "top 50%",
    scrub: 4
  }
});

