import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    let listSong = `${environment.apiUrl}/songs`;
    return this.http.get<any>(listSong);
  }
  listLimit(): Observable<any> {
    let listSong = `${environment.apiUrl}/songsLimit`;
    return this.http.get<any>(listSong);
  }
  listByCate(id:any): Observable<any> {
    let listByCate = `${environment.apiUrl}/songs/categories/${id}`;
    return this.http.get<any>(listByCate);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/songs`, data);
  }
  read(id:any): Observable<any> {
    let data = `${environment.apiUrl}/songs/${id}`;
    return this.http.get<any>(data);
  }
  update(id:any, data:any): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/songs/${id}`, data);
  }
  
}
