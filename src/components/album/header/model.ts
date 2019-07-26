export interface HeaderModel {
    appName?: string;
    about?: string;
    contact?: StringMap;
    image?: string;
}

interface StringMap { [k: string]: string; }
