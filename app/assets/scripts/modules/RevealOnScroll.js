import $ from 'jquery';
class RevealOnscoll{
    constructor(){
        this.itemsToReveal = $('.feature-item');
        this.hideInitially();
    }
    hideInitially(){
        this.itemsToReveal.addBack("reveal-item");
    }

}

export default RevealOnscoll;