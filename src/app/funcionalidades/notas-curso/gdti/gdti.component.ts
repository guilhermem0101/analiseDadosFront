import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-gdti',
  templateUrl: './gdti.component.html',
  styleUrls: ['./gdti.component.css']
})
export class GdtiComponent {
  formulario: FormGroup;
  lista!: any[]
  listaMedia!: any[]
  constructor(private service: FuncionalidadesService) {

    this.formulario = new FormGroup({
      disciplina: new FormControl(''),

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



  }

  displayedColumns: string[] = ['nome_aluno', 'n_prova', 'nota_tirada'];
  displayedColumnsM: string[] = ['nome_aluno', 'media'];
}
