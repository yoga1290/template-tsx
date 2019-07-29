export type StringMap = {[k:string]: string};

export interface SmallPostModel {
    title: string;
    description: string;
    links: StringMap;
}
