import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';
import { PageService } from '../page/page.service';
import { Detail } from './interface/detail';

@Component({
    selector: 'app-user-detail',
    template: `
        <div *ngIf="detail">
           <p>{{detail.title}}</p>
           <div>{{detail.content}}</div>
           <app-reply [replies]="detail.replies"></app-reply>
        </div>
    `
})

export class UserDetailComponent implements OnInit {
    id: string;
    detail: Detail;
    ngOnInit() {
        this.route.params.subscribe((params) => this.id = params.id)
        this.getDetail(this.id);
    }
    constructor(
        private route: ActivatedRoute,
        private service: PageService
    ) { }
    getDetail(id: string) {
        this.service.getDetail(id)
            .subscribe(
                data => {
                    console.log(data, 'detail')
                    this.detail = data.data;
                }
            )
    }
}