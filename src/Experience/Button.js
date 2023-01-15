import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

import ColorChange from './ColorChange'
import TextLink from './TextLink'

gsap.registerPlugin(SplitText)

export default class Button 
{
    constructor()
    {
        let btn = $('.btn')
        $(btn).each(function()
        {
            let self = $(this),
                bg = self.find('.btn__bg'),
                rect = bg.find('rect'),
                text = self.find('p'),
                split = new SplitText(text, {type: 'chars'}),
                tl = gsap.timeline({paused: true})

            tl.from(rect, { opacity: 0, stagger: { from: 'random', each: 0.01 } })

            let classes = ['green', 'blue', 'light-blue', 'yellow'];

            const colorChange = new ColorChange(self, bg, classes)
            const btnLink = new TextLink(self, split.chars)

            self.on('mouseenter', () => tl.timeScale(2).restart())
            self.on('mouseleave', () => tl.timeScale(2).reverse())
        })

        $('[text-link]').each(function()
        {
            let self = $(this),
                text = self.find('p'),
                split = new SplitText(text, {type: 'chars'})

            const textLink = new TextLink(self, split.chars)
        })
    }
}