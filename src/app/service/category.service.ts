import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    let listCate = `${environment.apiUrl}/categories`;
    return this.http.get<any>(listCate);
  }
  create(data: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/categories`, data);
  }
  read(id:any): Observable<any> {
    let data = `${environment.apiUrl}/categories/${id}`;
    return this.http.get<any>(data);
  }
}