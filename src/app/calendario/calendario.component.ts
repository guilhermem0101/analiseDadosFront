import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FuncionalidadesService } from '../service/funcionalidades.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  formulario: FormGroup;
  listaCuros!: any[]
  constructor(private service: FuncionalidadesService) {

    this.formulario = new FormGroup({
      curso: new FormControl(''),

    });
  }




  create() {
    const formData = this.formulario.value;

    this.service.getCalendario(formData.curso).subscribe((disc: any[]) => {
      this.listaCuros = disc;
    });


  }



  displayedColumns: string[] = ['dia_semana', 'nome_disciplina', 'nome_prof', 'cod_disciplina'];
}
