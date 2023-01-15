import { gsap } from 'gsap'

export default class TextLink 
{
    constructor(trigger, elemts)
    {   

        let tl = gsap.timeline({ paused: true, defaults: { duration: 1, ease: 'power3', stagger: { from: 'random', each: 0.04 } } })

        tl.to(elemts, { opacity: 0, duration: 0.6 })
        .to(elemts, { opacity: 1, duration: 0.4 })

        trigger.on('mouseenter', () => tl.timeScale(3).restart())
    }
}