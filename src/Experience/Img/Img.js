import './img.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default class Img 
{
    constructor()
    {
        let img = $('[scroll-img]')
        $(img).each(function()
        {
            let self = $(this),
                rect = self.find('rect')
                
            let tl = gsap.timeline(
            {
                scrollTrigger: {trigger: self, start: 'top 80%' }, defaults: { duration: 0.4, ease: 'power3', stagger: { from: 'random', each: 0.01 } }
            })

            tl.to(rect, {opacity: 0})
        })
    }
}