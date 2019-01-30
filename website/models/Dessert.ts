import {Nourriture} from "./supermodels/Nourriture";

export class Dessert extends Nourriture {
    type = String;
    isFrozen = Boolean;
    constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, isFrozen){
        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl);
        this.type = type;
        this.isFrozen = isFrozen;
    }
}