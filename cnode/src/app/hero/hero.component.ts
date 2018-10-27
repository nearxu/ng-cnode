import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    // this.heroes = this.heroService.getHeroes();
    // 新的版本等待 Observable 发出这个英雄数组，
    // 这可能立即发生，也可能会在几分钟之后。
    //  然后，subscribe 函数把这个英雄数组传给这个回调函数，
    // 该函数把英雄数组赋值给组件的 heroes 属性。
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
