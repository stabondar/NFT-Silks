import './roadmap.css'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

import Accordion from '../Accordion'

gsap.registerPlugin(SplitText)

export default class Roadmap 
{
    constructor()
    {   
        $('.roadmap__list-item').each(function()
        {
            let self = $(this),
                bottom = self.find('.roadmap__item--btm'),
                title = self.find('.roadmap__item--title').find('.h--80'),
                splitTitle = new SplitText(title, {type: 'chars'}),
                tl = gsap.timeline({ paused: true, defaults: { duration: 1, ease: 'power3', stagger: { from: 'random', each: 0.04 } } })


            tl.to(splitTitle.chars, { opacity: 0, duration: 0.6 })
            .set(splitTitle.chars, {color: '#9ae055', stagger: 0, duration: 0})
            .to(splitTitle.chars, { opacity: 1, duration: 0.4 }, '<')

            const accordion = new Accordion(self, bottom, '.roadmap__list-item.open')

            self.on('mouseenter', () => tl.timeScale(3).restart())
            self.on('mouseleave', () => tl.timeScale(4).reverse())
        })
    }
}