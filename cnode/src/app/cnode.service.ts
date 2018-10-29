import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CnodeService {
  private baseUrl = 'http://cnodejs.org/api/v1/topics'
  data: []
  constructor(
    private http: HttpClient,
  ) { }
  getData(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
      .pipe(
        tap(heroes => this.log('fetch heroes')),
        catchError(this.handleError('getData', []))
      )
  }
  private log(message: string) {
    // this.messageService.add(`herosevice ${message}`)
    console.log(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (err: any): Observable<T> => {
      console.log(err);
      return of(result as T)
    }
  }
}
