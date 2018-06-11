import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RecepcionSearchInput, RecepcionResponse } from './dashboard/recepcion';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private heroesUrl: string = 'api/heroes'

  getHeroes(): Observable<Hero[]> {
    this.log('heroes pushed!')
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  getHeroById(id): Observable<Hero> {
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
      .pipe(
      tap(_ => this.log(`fetched hero id = ${id}`)),
      catchError(this.handleError<Hero>('getHeroById'))
      )
  }

  getPrueba() {
    const params: RecepcionSearchInput = { page: 1, pageSize: 10, pageCount: 0 }
    var httpParams = new HttpParams()
    .set('filtro.page', '12')
    .set('filtro.pageCount', '122')
    .set('FAFA', '122')
    
    return this.http.get<RecepcionResponse>('/Home/GetData', { params: httpParams })
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`)
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T)
    } 
  }

}
