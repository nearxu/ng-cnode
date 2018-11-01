import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.interface';

@Component({
    selector: 'app-page-list',
    template: `
        <div *ngIf="item">
            <a [routerLink]="['/detail',item.id]">
                <img [src]="item.author.avatar_url" />
                <div>{{item.title}}</div>
            </a>
        </div>
    `,
})
//  
export class PageListComponent {
    @Input() item: User
}