import { CardModel } from './card/model'

export interface MainModel {
    title?: string;
    description?: string;
    cards?: CardModel[]; 
}
