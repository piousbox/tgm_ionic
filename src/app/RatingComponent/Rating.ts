import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: './Rating.html',
    styleUrls: ["./Rating.scss"],
})
export class Rating implements OnInit {
    @Input() rate: number = 0;

    rating: Array<number> = (new Array(5)).fill(0);
    iconMapping: any = {
        0: "star-outline",
        1: "star-half",
        2: "star"
    };

    constructor() { }

    ngOnInit() {
        this.setRatingArray();
    }

    setRatingArray() {
        let i = 0;
        while (this.rate > 0) {
            if (this.rate < 1) {
                this.rating[i] = 1;
            } else {
                this.rating[i] = 2;
            }
            this.rate--;
            i++;
        }
    }

}
