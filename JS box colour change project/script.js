var rect = document.querySelector(".centre");

rect.addEventListener("mousemove", function (details) {
var location = rect.getBoundingClientRect();
var inside = details.clientX - location.left;

if(inside < location.width/2){
    var redcolor = gsap.utils.mapRange(0,location.width/2,255,0,inside);

    gsap.to(rect,{
        backgroundColor: `rgb(${redcolor},0,0)`,
        ease: Power4,
    })
}
else{
    var bluecolor = gsap.utils.mapRange(location.width/2,location.width,0,255,inside);

    gsap.to(rect,{
        backgroundColor: `rgb(0,0,${bluecolor})`,
        ease: Power4,
    })
} 
});


rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: "rgb(232, 190, 172)",
        ease: Power1,
    })
})
