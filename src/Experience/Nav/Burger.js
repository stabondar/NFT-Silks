import './nav.css'

import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'

import TextLink from '../TextLink'
import ColorChange from '../ColorChange'

gsap.registerPlugin(SplitText)

export default class Burger 
{
    constructor()
    {
        let nav = $('.nav-parent'),
            menu = nav.find('.nav__menu-btn'),
            burger = $('.burger'),
            burgerBg = $('.burger__bg'),
            burgerBgRect = burgerBg.find('rect'),
            burgerItem = $('.burger__item').find('.h--36'),
            burgerItemSplit = new SplitText(burgerItem, { type: 'chars' })

        const open = () => burger.addClass('open')
        const hide = () => burger.removeClass('open')

        let tl = gsap.timeline({ paused: true, onStart: open, onReverseComplete: hide, defaults: { duration: 0.4 } })

        tl.from(burgerBgRect, { opacity: 0, stagger: { from: 'random', each: 0.01 } })
        .from(burgerItemSplit.chars, { opacity: 0, stagger: { from: 'random', each: 0.02 } }, '<0.2')


        let classes = ['green', 'purple', 'blue', 'light-blue', 'yellow']
        const colorChange = new ColorChange(menu, burgerBg, classes, burger)

        menu.on('mouseenter click', () => tl.timeScale(2).play())
        nav.on('mouseleave', () => tl.timeScale(2).reverse())
        burgerItem.on('click', () => tl.timeScale(2).reverse())


        $(burgerItem).each(function()
        {
            let self = $(this),
                split = self.find(burgerItemSplit.chars)

            const burgerTextAnim = new TextLink(self, split)
        })
    }
}