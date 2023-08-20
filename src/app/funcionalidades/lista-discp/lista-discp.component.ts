import { Component } from '@angular/core';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-lista-discp',
  templateUrl: './lista-discp.component.html',
  styleUrls: ['./lista-discp.component.css']
})
export class ListaDiscpComponent {
  listaDisciplinas!: any[]
  constructor(private service: FuncionalidadesService) { }
  cod_curso!:string
  ngOnInit() {
   this.getDisciplinas('RDS8');
  }


  getDisciplinas(cod_curso: string) {
    this.service.getMediaByAluno(cod_curso).subscribe(
      (disciplinas: any[]) => {
        this.listaDisciplinas = disciplinas;
        
      },
      (error) => {
        console.error('Erro ao obter média do aluno:', error);
      }
    );
  }


  displayedColumns: string[] = ['nome_curso', 'cod_curso'];
}
