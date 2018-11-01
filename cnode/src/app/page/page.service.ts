
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PageService {
    constructor(
        private http: HttpClient,
    ) { }
    private baseUrl = 'http://cnodejs.org/api/v1/topics/'
    private detailUrl = 'http://cnodejs.org/api/v1/topic/'
    getData(type: string): Observable<any> {
        const params = new HttpParams().set('tab', type);
        return this.http.get<any>(this.baseUrl, { params })
            .pipe(
                tap(data => this.log('fetch data')),
                catchError(this.handleError('getData', []))
            )
    }
    getDetail(id: string): Observable<any> {
        return this.http.get<any>(this.detailUrl + id)
            .pipe(
                tap(data => this.log('fetch detail')),
                catchError(this.handleError('getDetail', []))
            )
    }
    private log(message: string) {
        console.log(message);
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (err: any): Observable<T> => {
            console.log(err);
            return of(result as T)
        }
    }
}