export class Quote {
    showFooter: boolean;
    upvotes: number;
    downvotes: number;
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public author: string,
        public date: Date
    ){
        this.showFooter = false;
        this.downvotes = 0;
        this.upvotes = 0
    }
}
    
