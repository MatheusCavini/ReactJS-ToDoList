export interface CategorieProps{
    id:number;
    name:string;
    color:string;
};

export type CategorieContextType = {
    categList: CategorieProps[];
    
}