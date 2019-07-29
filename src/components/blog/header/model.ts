export interface HeaderModel {
    appName?: string;
    about?: string;
    links?: StringMap;
    image?: string;
}

interface StringMap { [k: string]: string; }
