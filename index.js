gsap.from('.header', {delay: 2, duration: 2.0,  y: -100, opacity: 0, ease: 'back'})

 gsap.to('h1', {
    text: 'As long as there was coffee in the world, how bad could things be?',
    duration: 3,
    ease: 'power1.in',
    yoyo: true,
    delay: 3,
 })

 gsap.from('.menu', { delay: 5, duration: 2.5,  x: -400, opacity: 0, ease: 'back'})
 gsap.from('.link', {opacity: 0, duration: 3, delay: 5.5, stagger: 0.6})

 gsap.to('.one', {delay: 1, duration: 2, x: -400, ease: 'power2.inOut', opacity: 0})


 gsap.from('.two', {delay: 1, duration: 2, x: -400, ease: 'power2.inOut', opacity: 0, rotation: -360})
 gsap.from('.three', {delay: 1.5, duration: 2, x: -400, ease: 'power2.inOut', opacity: 0, rotation: -360})
 gsap.from('.four', {delay: 2, duration: 2, x: -400, ease: 'power2.inOut',  opacity: 0, rotation: -360})



 gsap.from('.btn', {opacity: 0, delay: 7, duration: 2, rotation: 720})