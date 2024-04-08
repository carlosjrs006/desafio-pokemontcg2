import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetCardsService {

  constructor(private http: HttpClient) { }

  public getCards(pageSize:any , page:any, name?:any) {
    let headers = new HttpHeaders();
    if (environment.apiKey) {
      headers = headers.set('X-Api-Key', environment.apiKey);
    }

    var urlApiPok = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${pageSize}`;
    if(name){
      urlApiPok = urlApiPok +`&q=name:${name}`;
    }

    return this.http.get<any>(urlApiPok, { headers });
  }


  // POST
  createDeck(deck: any): Observable<any>{
    return this.http.post<any>(`https://api.mockfly.dev/mocks/9988b550-83d3-4eee-bc89-ddeaab50852e/decks`, deck);
  }

  // DELETE
  // deleteDeck(id: any): Observable<any>{
  //   return this.http.delete<any>(`${this.urlFake}/${id}`);
  // }
}
