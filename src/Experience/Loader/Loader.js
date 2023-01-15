import './loader.css'
import { gsap } from 'gsap'

export default class Loader 
{
    constructor()
    {
        const init = () =>
        {   
            let heroMain = $('main').find('.hero'),
                heroClip = $('.global').find('.hero'),
                loader = $('.loader'),
                loaderBody = loader.find('.loader__body'),
                list0 = loader.find('.loader__list').eq(0),
                list1 = loader.find('.loader__list').eq(1),
                list2 = loader.find('.loader__list').eq(2),
                allItems = loader.find('.loader__item'),
                itemsLenngth0 = list0.find('.loader__item').length,
                itemsLenngth1 = list1.find('.loader__item').length,
                itemsLenngth2 = list2.find('.loader__item').length,
                rect = loader.find('rect')
 
            let tl = gsap.timeline({ defaults: { ease: 'power3' }, onComplete: () => loader.add(heroClip).css('display', 'none') })

            tl.to(rect, {opacity: 1, stagger: { from: 'random', each: 0.005 }, duration: 0.4})
              .to(allItems, {backgroundColor: '#dfdeff', duration: 0, stagger: 0})
              .to(list2, {y: (itemsLenngth2 - 1) * -loaderBody.height() - ((itemsLenngth2 - 1) * 3), duration: 4})
              .to(list1, {y: (itemsLenngth1 - 1) * -loaderBody.height() - ((itemsLenngth1 - 1) * 3), duration: 4}, '<')
              .to(list0, {y: (itemsLenngth0 - 1) * -loaderBody.height() - ((itemsLenngth0 - 1) * 3), duration: 3.5}, '<0.5')
              .to(loader, {clipPath: 'inset(0 0 100% 0)', duration: 1.2}, '<85%')
              .to(heroClip, {clipPath: 'inset(0 0 100% 0)', duration: 1.2}, '<50%')
        }
        window.addEventListener('load', () => init())
    }
}