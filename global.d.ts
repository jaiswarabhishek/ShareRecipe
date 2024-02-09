export {}

declare global {
    interface Recipe{
        readonly id: number;
        name: string;
        description: string;
        ingredients: string[];
        instructions: string[];
        image: string;
    }
}
