export type StringMap = {[k:string]: string};

export interface FeaturedPostModel {
    title: string;
    description: string;
    links: StringMap;
}
