import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadesService {

  private apiUrl = 'http://127.0.0.1:5000'; // URL da API de usuários

  constructor(private http: HttpClient) { }

  getGrade(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${'/grade'}`);
  }


  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${'/cursos'}`);
  }

  getDisciplinas(cod_curso: string): Observable<any[]> {
    
    const params = new HttpParams().set('cod_curso', cod_curso);
    return this.http.get<any[]>(`${this.apiUrl}${'/disciplinas'}`, { params });
  }

  getCalendario(cod_curso: string): Observable<any[]> {

    const params = new HttpParams().set('cod_curso', cod_curso);
    return this.http.get<any[]>(`${this.apiUrl}${'/calendario'}`, { params });
  }

  getNotasByDisciplina(cod_disciplina: string): Observable<any[]>{
    const params = new HttpParams().set('cod_disciplina', cod_disciplina);
    return this.http.get<any[]>(`${this.apiUrl}${'/notas-alunos'}`, { params });
  }

  getNotasByAluno(nome_aluno: string): Observable<any[]> {
    const params = new HttpParams().set('nome_aluno', nome_aluno);
    return this.http.get<any[]>(`${this.apiUrl}${'/notasbyalunos'}`, { params });
  }



  getMediasByDisciplina(cod_disciplina: string): Observable<any[]> {
    const params = new HttpParams().set('cod_disciplina', cod_disciplina);
    return this.http.get<any[]>(`${this.apiUrl}${'/meidas-alunos'}`, { params });
  }




  getMediaByAluno(nomeAluno: string): Observable<any[]> {

    const params = new HttpParams().set('nome', nomeAluno);
    return this.http.get<any[]>(`${this.apiUrl}${'/meidas-alunos'}`, { params });
  }

  
}
