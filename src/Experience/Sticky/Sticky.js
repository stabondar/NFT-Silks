import './sticky.css'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default class Sticky 
{
    constructor()
    {   
        let mm = gsap.matchMedia(),
            isDesktop = "(min-width: 991px)",
            isMobile = "(max-width: 991px)"

        let trigger = $('.silks__body'),
            list = trigger.find('.silks__list'),
            row = list.find('.silks__row'),
            rightImgParent = row.find('.silks__img:nth-child(even)'),
            leftImgParent = row.find('.silks__img:nth-child(odd)'),
            rightImg = rightImgParent.find('img'),
            leftImg = leftImgParent.find('img'),
            allImgs = list.find('img'),
            logo = trigger.find('.h--200'),
            logoSplit = new SplitText(logo, {type: 'chars'}),
            logoStartX = gsap.utils.wrap([-200, -100, 0, 100, 200]),
            tl


        mm.add(isDesktop, () => 
        {
            ScrollTrigger.create(
            {
                trigger: trigger, start: 'top top', end: '+=3000', pin: list, scrub: true, pinSpacing: true
            })

            tl = gsap.timeline(
            {
                scrollTrigger: { trigger: trigger, start: 'top 75%', end: 'bottom bottom', scrub: true }, defaults: {stagger: 0.1}
            })
    
            tl.from(rightImgParent, {clipPath: 'inset(0 0 0 100%)'})
                .from(leftImgParent, {clipPath: 'inset(0 100% 0 0)'}, '<')
                .to([rightImg, leftImg], {x: 0, stagger: 0}, '<')
                .from(logoSplit.chars, {x: logoStartX, stagger: 0, duration: 0.8}, '<')
        })

        mm.add(isMobile, () => 
        {
            tl = gsap.timeline(
            {
                scrollTrigger: { trigger: trigger, start: 'top 90%', end: 'bottom top', scrub: true }, defaults: {stagger: 0.1}
            })
    
            tl.from(allImgs, {clipPath: 'inset(100% 0 0 0)'})
            .from(logoSplit.chars, {x: logoStartX, stagger: 0, duration: 0.8}, '<')
        })
    }
}