import { gsap } from 'gsap'

import Experience from './Experience'

export default class Accordion
{
    constructor(trigger, bottom, allElems)
    {
        this.experience = new Experience()
        let scroll = this.experience.scroll.locoScroll

        trigger.on('click', () => 
        {
            if (!trigger.hasClass('open')) 
            {
                $(allElems).click()    
            }

            if (trigger.hasClass('open')) 
            {
                gsap.to(bottom, {height: 0, ease: 'power3', duration: 0.6})
            } else 
            {
                bottom.css('height', 'auto')
                let autoHeight = bottom.height()
                bottom.css('height', '0px')

                gsap.to(bottom, {height: autoHeight, ease: 'power3', duration: 0.6})
            }
            trigger.toggleClass('open')

            setTimeout(() => {
                scroll.update()
            }, 600)
        })
    }
}