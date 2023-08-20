import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AlunosServiceService {

  private apiUrl = 'http://127.0.0.1:5000'; // URL da API de usuários

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${'/ler'}`);
  }

  createUser(user: any): Observable<any> {
    //const params = new HttpParams().set('d_nasc', d_nasc);
    return this.http.post<any>(`${this.apiUrl}${'/cadastrar'}`, user);
  }

  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/${user.id}`;
    return this.http.put<any>(url, user);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}