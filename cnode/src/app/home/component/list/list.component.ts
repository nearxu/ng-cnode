import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }
    id: string
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id')
        console.log(this.id)
    }

}
