export class Category {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public books: {
            id: number,
            title: string,
            author: string,
            price: number
        }[]
    ) {

    }
}