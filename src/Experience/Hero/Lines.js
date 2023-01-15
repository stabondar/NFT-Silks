import './hero.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Experience from '../Experience.js'

gsap.registerPlugin(ScrollTrigger)


export default class Lines
{
    constructor()
    {   
        this.experience = new Experience()
        this.scroll = this.experience.scroll.locoScroll
        
        const roll1 = roll(".loop__wrap", {duration: 40}),
            roll2 = roll(".footer__loop--wrap", {duration: 40})
        
        this.scrollFunc(roll1, roll2)

        // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
        function roll(targets, vars, reverse) 
        {
            vars = vars || {};
            vars.ease || (vars.ease = "none");
            const tl = gsap.timeline(
            {
                repeat: -1,
                onReverseComplete() { 
                    this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
                }
            }), 
                elements = gsap.utils.toArray(targets),
                clones = elements.map(el => 
                {
                    let clone = el.cloneNode(true)
                    el.parentNode.appendChild(clone)
                    return clone
                }),
            positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}))
            positionClones()
            elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0))
            window.addEventListener("resize", () => {
                let time = tl.totalTime() // record the current time
                tl.totalTime(0) // rewind and clear out the timeline
                positionClones() // reposition
                tl.totalTime(time) // jump back to the proper time
            });
            return tl;
        }
    }

    scrollFunc(roll1, roll2)
    {
        this.direction = this.experience.scroll.locoScroll.scroll.instance.direction

        let direction = 'up'
        this.scroll.on('scroll', () => 
        {
            this.direction = this.experience.scroll.locoScroll.scroll.instance.direction
            if(this.direction == 'up') { direction = 1 } else { direction = -1 }
            if(this.direction != direction)
            {
                direction *= -1;
                gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }

        })
    }

}