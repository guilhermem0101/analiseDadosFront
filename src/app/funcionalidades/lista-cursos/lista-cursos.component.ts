import { Component } from '@angular/core';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent {
  constructor(private service: FuncionalidadesService) { }


  listaCuros!:any[]


  ngOnInit() {
    this.service.getCursos().subscribe((cursos: any[]) => {
      this.listaCuros = cursos;
    });
  }

  displayedColumns: string[] = ['nome_curso', 'cod_curso'];
}
