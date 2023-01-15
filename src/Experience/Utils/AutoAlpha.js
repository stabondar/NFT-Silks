import { gsap } from 'gsap'

export default class AutoAlpha 
{
    constructor(main)
    {
        this.main = main
        const init = () => 
        {
            gsap.set(this.main, { autoAlpha: 1 })
        }
        window.addEventListener('load', () => init())
    }
}