import {Nourriture} from "./supermodels/Nourriture";

export class Plat extends Nourriture {
    type = String;
    constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type){
        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl);
        this.type = type;
    }

}