export interface CardModel {
    text?: string;
    image?: string;
    time?: number;
    links?: StringMap;
}

interface StringMap { [k: string]: string; }
