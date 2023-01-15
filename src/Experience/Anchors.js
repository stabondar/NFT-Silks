import gsap from 'gsap'

import Experience from './Experience'

export default class Anchors 
{
    constructor()
    {
        this.experience = new Experience()
        let scroll = this.experience.scroll.locoScroll,
            item = $('.burger__item'),
            logo = $('.nav-parent').find('.nav__logo'),
            hero = document.querySelector('main').querySelector('.hero'),
            sections = gsap.utils.toArray('[section]'),
            offset = - window.innerHeight / 4,
            scrollOffset = { offset: offset }

        $(item).each(function(i)
        {
            let self = $(this),
                currentSection = sections[i]
            
            self.on('click', () => scroll.scrollTo(currentSection, scrollOffset))
        })

        logo.on('click', () => scroll.scrollTo(hero))
    }
}