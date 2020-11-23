let tl = gsap.timeline({defaults:{duration: 2,}});

tl.from('nav', {y:-100, opacity: 0, ease: 'bounce'})
    .from('.test', {x: -100, opacity: 0, duration:3,  ease: 'elastic'})
    .from('.first-sec-in button', {x: -100, opacity: 0, ease: 'elastic'}, "-=1.5")
    .from('.files-svg', {x: 100, opacity: 0, ease: 'expo'}, "-=2.5")
    .from('.dot-svg', {x: 100, opacity: 0, ease: 'expo'}, "-=2.5")
    .from('.second-sec-in button', {x: -200, opacity: 0, ease: 'back', }, "-=1.5")