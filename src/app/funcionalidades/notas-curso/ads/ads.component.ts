import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent {
  formulario: FormGroup;
  lista!:any[]
  listaMedia!:any[]
  listaByaluno!: any[]
  listaMedias!: any[]
  constructor(private service: FuncionalidadesService) {

    this.formulario = new FormGroup({
      disciplina: new FormControl(''),
      nome_aluno: new FormControl(''),
    });

    
  }

  create() {
    const formData = this.formulario.value;

    this.service.getNotasByDisciplina(formData.disciplina).subscribe((disc: any[]) => {
      this.lista = disc;
    });

    this.service.getMediasByDisciplina(formData.disciplina).subscribe((disc: any[]) => {
      this.listaMedia = disc;
    });

    this.service.getNotasByAluno(formData.nome_aluno).subscribe((disc: any[]) => {
      this.listaByaluno = disc;
    });

    // this.service.getMediaByAluno(formData.nome_aluno).subscribe((disc: any[]) => {
    //   this.listaMedias = disc;
    // });


    
  }

  displayedColumns: string[] = ['nome_aluno', 'n_prova', 'nota_tirada'];
  displayedColumnsM: string[] = ['nome_aluno', 'media'];
  displayedColumnsMa: string[] = ['nome_disciplina', 'n_prova', 'nota_tirada'];
  displayedColumnsMam: string[] = ['nome_disciplina', 'media'];
}
