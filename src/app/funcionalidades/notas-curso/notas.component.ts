import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  formulario: FormGroup;
  constructor(private service: FuncionalidadesService) {

    this.formulario = new FormGroup({
      curso: new FormControl(''),

    });
   }
  listaCuros!: any[]
  listaDisciplinas!: any[]

  ngOnInit() {
    // Chame o método para obter a média do aluno
    this.getMediaPorAluno('Thiago Miura');

    // this.service.getCursos().subscribe((cursos: any[]) => {
    //   this.listaCuros = cursos;
    // });
  }

  getMediaPorAluno(nomeAluno: string) {
    this.service.getMediaByAluno(nomeAluno).subscribe(
      (mediaAluno: any[]) => {
        // Faça o que você precisa com a média do aluno retornado
        console.log('Média do aluno:', mediaAluno);
      },
      (error) => {
        console.error('Erro ao obter média do aluno:', error);
      }
    );
  }



  create() {
    const formData = this.formulario.value;

    this.service.getDisciplinas(formData.curso).subscribe((disc: any[]) => {
      this.listaDisciplinas = disc;
    });

    
  }



  displayedColumns: string[] = ['nome_curso', 'cod_curso'];

}
