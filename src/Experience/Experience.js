import Loader from './Loader/Loader.js'
import Scroll from './Scroll/Scroll.js'
import Lines from './Hero/Lines.js'
import AutoAlpha from './Utils/AutoAlpha.js'
import Sticky from './Sticky/Sticky.js'
import Feature from './Feature/Feature.js'
import Roadmap from './Roadmap/Roadmap.js'
import Text from './Text/Text.js'
import Img from './Img/Img.js'
import NavScroll from './Nav/NavScroll.js'
import Burger from './Nav/Burger.js'
import Button from './Button.js'
import Anchors from './Anchors.js'

let instance = null

export default class Experience 
{
    constructor()
    {
        if(instance) return instance
        instance = this
        this.main = document.querySelector('main')

        this.scroll = new Scroll(this.main)
        this.loader = new Loader()
        this.autoAlpha = new AutoAlpha(this.main)
        this.lines = new Lines()
        this.sticky = new Sticky()
        this.feature = new Feature()
        this.roadmap = new Roadmap()
        this.text = new Text()
        this.img = new Img()
        this.navScroll = new NavScroll()
        this.burger = new Burger()
        this.btn = new Button()
        this.anchors = new Anchors()
    }
}