import {Nourriture} from "./supermodels/Nourriture";

export class Entree extends Nourriture {
    description = String;
    ingredients = [];
    temp = Boolean;
    constructor(name, price, isAvailableOffMenu, availableQuanity, imgUrl, description, temp){

        super(name, price, isAvailableOffMenu, availableQuanity, imgUrl);

        this.description = description;
        this.temp = temp;

    }
}