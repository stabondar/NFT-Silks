export default class ColorChange
{
    constructor(trigger, elem,  classes, depends)
    {
        let randomClass
        let previousClass = null

        const colorChange = () => 
        {   
            if (previousClass === null)
            {
                // Get Random Class
                randomClass = classes[Math.floor(Math.random() * classes.length)]
                // Paste Class to body
                elem.addClass(randomClass)
                // Get current Class
                previousClass = randomClass
                // Remove current from Array
                classes = classes.filter(item => item !== previousClass)
            } else
            {
                // Remove old clasees
                elem.removeClass(previousClass)
                // Get new Random
                randomClass = classes[Math.floor(Math.random() * classes.length)]
                elem.addClass(randomClass)
                // Remove new random prom array
                classes = classes.filter(item => item !== randomClass)
                // Push previus class to array
                classes.push(previousClass)
                // Get previous
                previousClass = randomClass
            }
        }

        trigger.on('mouseenter click', () => 
        {
            if(depends)
            {
                if(!depends.hasClass('open'))
                {
                    colorChange()
                }
            } else 
            {
                colorChange()
            }
        }) 
    }
}