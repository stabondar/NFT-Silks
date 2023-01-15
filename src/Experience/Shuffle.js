export default class Shuffle 
{
    constructor(element)
    {
        let ctr = element.length, temp, index
    
        // While there are elements in the array
        while (ctr > 0) {
        // Pick a random index
            index = Math.floor(Math.random() * ctr)
        // Decrease ctr by 1
            ctr--
        // And swap the last element with it
            temp = element[ctr]
            element[ctr] = element[index]
            element[index] = temp
        }
        return element
    }
}