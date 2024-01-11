export {}

declare global {
    interface Recipe{
        id: number;
        name: string;
        ingredients: string[];
        instructions: string[];
        image: string;
    }
}