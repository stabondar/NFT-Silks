import './text.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Text 
{
    constructor()
    {
        let mm = gsap.matchMedia(),
            isDesktop = "(min-width: 991px)"

        let titleDiv = $('[title-div]')
        $(titleDiv).each(function()
        {
            let self = $(this),
                title = self.find('.h--200'),
                name = self.find('.h--14'),
                line = name.parent(),
                nameSplit = new SplitText(name, {type: 'chars'}),
                titleSplit = new SplitText(title, {type: 'chars, words'})


            let tl = gsap.timeline(
            {
                scrollTrigger: { trigger: title, start: 'top 80%' }, defaults: { duration: 1, ease: 'power3', stagger: 0.04 }
            })

            mm.add(isDesktop, () => { gsap.set(titleSplit.chars[0], {textIndent: '18.02vw'}) })
    
            tl.from(titleSplit.chars, { opacity: 0, stagger: { from: 'random', each: 0.04 } })
              .from(line, { clipPath: 'inset(0 100% 0 0)' }, '<0.2')
              .from(nameSplit.chars, { opacity: 0, stagger: { from: 'random', each: 0.04 } }, '<0.2')
        })
    }
}