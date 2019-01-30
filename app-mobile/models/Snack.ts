import {Nourriture} from "./supermodels/Nourriture";

export class Snack extends Nourriture {
    type = String;
    isSalty = Boolean;
    constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, isSalty){
        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl);
        this.type = type;
        this.isSalty = isSalty;
    }
}