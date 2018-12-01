export class NetPromoter {
    id: number;
    disable: boolean;
    rating: number;
    feedback: string;

    constructor(id: number, disable: boolean, rating: number, feedback: string ) {
        this.id = id;
        this.disable = disable;
        this.rating = rating;
        this.feedback = feedback;
    }
}