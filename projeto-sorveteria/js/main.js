var tl = gsap.timeline({
  scrollTrigger:{
    trigger: "#s1",
    start: "0% 80%",
    end: "50% 50%",
    markers: true,
    scrub: true,
  }
})

var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger: "#s2",
    start: "0% 80%",
    end: "50% 50%",
    markers: true,
    scrub: true,
  }
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger: "#s3",
    start: "0% 65%",
    end: "50% 50%",
    markers: true,
    scrub: true,
  }
})

tl.to(".hero-center-image", {
    top:"145%",
    left: "52.5%",
    width: "17vw",
    rotate: "0",
})

tl1.to(".hero-center-image", {
  top:"280%",
  left: "26%",
  width: "11vw",
})

tl2.to(".hero-center-image", {
  top:"380%",
  left: "35%",
  width: "11vw",
  rotate: "-53deg",
})