gsap.set(".photo:not(:first-child)", {opacity:0, scale:0.5})

const animation = gsap.to(".photo:not(:first-child)", {
	opacity:1, scale:1, duration:1, stagger:1
})

ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right",
	animation: animation,
	scrub:true,
	markers:true
})




/* ScrollTrigger Docs

https://greensock.com/docs/v3/Plugins/ScrollTrigger

*/





/* 

learn more GreenSock and ScrollTrigger

https://www.creativeCodingClub.com

new lessons weekly
less than $1 per week

*/