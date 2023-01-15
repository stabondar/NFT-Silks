import './loco.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LocomotiveScroll from 'locomotive-scroll'

gsap.registerPlugin(ScrollTrigger)

export default class Scroll 
{
    constructor(main)
    {   
        this.main = main
        this.locoScroll
        
        this.init()
    }

    init()
    {
        this.locoScroll = new LocomotiveScroll({
            el: this.main,
            smooth: true,
            multiplier: 1.0,
            lerp: 0.15,
            getDirection: true,
            getSpeed: true
        })

        let smooth = this.locoScroll

        if(window.innerWidth > 991)
        {

            smooth.on('scroll', ScrollTrigger.update)
            ScrollTrigger.scrollerProxy(this.main, {
                scrollTop(value) {
                    return arguments.length ? smooth.scrollTo(value, 0, 0) : smooth.scroll.instance.scroll.y
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
                pinType: this.main.style.transform ? 'transform' : 'fixed'
            })
        
            ScrollTrigger.defaults({
                scroller: this.main
            })
        }
        
        window.addEventListener('load', () => 
        {
            ScrollTrigger.addEventListener('refresh', () => smooth.update())
            ScrollTrigger.refresh()
        })
        
        
        window.addEventListener('resize', () => 
        {
            ScrollTrigger.refresh()
        })
    }
}