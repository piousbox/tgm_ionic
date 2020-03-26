import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AppRouter } from '../app-router';

@Component({
    selector: 'metaline',
    templateUrl: './metaline.html',
    styleUrls: ['./metaline.scss'],
})
export class MetaLineComponent {
    @Input() created_at: string = "";
    @Input() username: string = "";
    @Input() city: any = {
        city: "",
        slug: ""
    };
    @Input() tags: Array<string> = [];

    constructor(
        private router: Router
    ) {}

    navigateToCity() {
        this.router.navigate([AppRouter.cityPath(this.city)]);
    }

}

