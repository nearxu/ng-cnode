import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'app-nav',
    template: `
        <nav>
            <span *ngFor="let item of items" (click)="toggleRoute(item.id)">{{item.name}}</span>
        </nav>
    `,
})

// <a *ngFor='let item of items' routerLink='topic/{{item.type}}'><span>{{item.name}}</span></a>
export class NavComponent implements OnInit {
    ngOnInit() { }
    constructor(private router: Router) { }
    items = [
        { id: 1, name: '全部', type: 'all' },
        { id: 2, name: '精华', type: 'good' }
    ]
    toggleRoute(id: number) {
        console.log('topic/' + id, 'route')
        this.router.navigate(['topic/' + id])
    }
}