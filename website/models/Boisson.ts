import {Nourriture} from "./supermodels/Nourriture";

export class Boisson extends Nourriture {
    type = String;
    temp = Boolean;
    constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, type, temp){
        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl);
        this.type = type;
        this.temp = temp;
    }
}