import './feature.css'

import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

import Accordion from '../Accordion'

gsap.registerPlugin(SplitText)

export default class Feature 
{
    constructor()
    {   
        let mm = gsap.matchMedia(),
            isDesktop = "(min-width: 991px)",
            isMobile = "(max-width: 991px)"

        mm.add(isDesktop, () => this.desktop() )
        mm.add(isMobile, () => this.mobile() )
    }

    desktop()
    {
        let el = $('.features__item')
        $(el).each(function()
        {
            let self = $(this),
                nameOut = self.find('.features__item-name.is--out').find('.h--80'),
                nameIn = self.find('.features__item-name.is--in').find('.h--80'),
                descr = self.find('p'), 
                border = self.find('.features__bg--parent'),
                bg = self.find('.features__bg'),
                splitNameOut = new SplitText(nameOut, {type: 'chars'}),
                splitNameIn = new SplitText(nameIn, {type: 'chars'}),
                splitDescr = new SplitText(descr, {type: 'words'}),
                tl = gsap.timeline({ paused: true, defaults: { duration: 1, ease: 'power3', stagger: 0.02 } })
                

            tl.to(border, {width: '100%', borderTopColor: '#9ae055'})
              .to(bg, {opacity: 1, duration: 0.4}, '<')
              .to(splitNameOut.chars, {x: -50, opacity: 0}, '<')
              .from(splitNameIn.chars, {x: 50, opacity: 0, stagger: {from: 'end', each: 0.02}}, '<0.2')
              .from(splitDescr.words, {opacity: 0}, '<0.2')
            
            self.on('mouseenter', () => tl.restart())
            self.on('mouseleave', () => tl.reverse())
        })
    }

    mobile()
    {
        let el = $('.features__item')
        $(el).each(function()
        {
            let self = $(this),
                bottom = self.find('.features__item--descr')

            const accordion = new Accordion(self, bottom, '.features__item.open')
        }) 
    }
}