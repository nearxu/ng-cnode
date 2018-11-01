import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    constructor(
        private http: HttpClient
    ) {

    }
    private baseUrl = 'http://cnodejs.org/api/v1/signin'

    handleLogin(value: any): Observable<any> {
        const params = new HttpParams().set('name', value.name).set('pass', value.password);
        return this.http.post<any>(this.baseUrl, { "name": value.name, "pass": value.password }).pipe(
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