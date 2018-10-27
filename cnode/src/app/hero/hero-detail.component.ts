import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name | uppercase}} Details</h2>
        <div><span>id: </span>{{hero.id}}</div>
        <div>
        <label>name:
        </label>
        </div>
        <button (click)="goBack()">go back</button>
        <button (click)="save()">save</button>
    </div>
    `,
})

export class HeroDetailComponent implements OnInit {
    // <input [(ngModel)]="hero.name" placeholder="name"/>
    @Input() hero: Hero;
    ngOnInit() {
        this.getHero()
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) { }
    getHero() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }
    goBack() {
        this.location.back();
    }
    save() {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }
}
