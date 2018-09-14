export class NetPromoter {
    disable: boolean;
    rating: number;
    feedback: string;

    constructor(disable: boolean, rating: number, feedback: string ) {
        this.disable = disable;
        this.rating = rating;
        this.feedback = feedback;
    }
}