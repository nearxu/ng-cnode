import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {

  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('messageService in HeroService')
    // return of(HEROES)

    // 所有的 HttpClient 方法都会返回某个值的 RxJS Observable

    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log('fetch heroes')),
        catchError(this.handleError('getHeroes', []))
      )
  }
  private log(message: string) {
    this.messageService.add(`herosevice ${message}`)
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.log(err);
      return of(result as T)
    }
  }
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url)
      .pipe(
        tap(_ => this.log(`fetch ${id}`)),
        catchError(this.handleError<Hero>(`getHero id: ${id}`))
      )
  }
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(() => this.log(`update hero id ${hero.id}`)),
        catchError(this.handleError('update'))
      )
  }
}
