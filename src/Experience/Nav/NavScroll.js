import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Experience from '../Experience'

gsap.registerPlugin(SplitText, ScrollTrigger)

export default class NavScroll 
{
    constructor()
    {
        if(window.innerWidth > 911)
        {
            this.experience = new Experience()
            this.scroll = this.experience.scroll.locoScroll
    
            let direction,
                nav = $('nav').eq(0),
                logo = nav.find('.nav__logo').find('.h--36'),
                menu = nav.find('.nav__menu-btn'),
                menuText = menu.find('.h--36'),
                logoSplit = new SplitText(logo, {type: 'chars'}),
                menuSplit = new SplitText(menuText, {type: 'chars'})
            
            let tl = gsap.timeline({ paused: true })
            
            tl.to(logoSplit.chars, { opacity: 0, stagger: { from: 'random', each: 0.06 } })
            .to(menuSplit.chars, { opacity: 0, stagger: { from: 'random', each: 0.06 } }, '<0.2')
            .to(menu, { display: 'none', duration: 0 })
    
            this.scrollFunc(direction, tl)
        }
    }
    
    scrollFunc(direction, tl)
    {        
        this.scroll.on('scroll', () => 
        {
            this.direction = this.experience.scroll.locoScroll.scroll.instance.direction
            direction = this.direction
    
            if(direction === 'down') tl.play()
            if(direction === 'up') tl.reverse()
        })
    }
}