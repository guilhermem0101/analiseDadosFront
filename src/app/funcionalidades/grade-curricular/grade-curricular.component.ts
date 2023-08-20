import { Component } from '@angular/core';
import { FuncionalidadesService } from 'src/app/service/funcionalidades.service';

@Component({
  selector: 'app-grade-curricular',
  templateUrl: './grade-curricular.component.html',
  styleUrls: ['./grade-curricular.component.css']
})
export class GradeCurricularComponent {

  disciplinas!: any[];
  mbi!: any[];
  ads!: any[];
  gtdi!: any[];
  sec!: any[];
  rds!: any[];
  constructor(private service: FuncionalidadesService) { }

  ngOnInit() {
    this.service.getGrade().subscribe((dis: any[]) => {
      this.mbi = [];
      this.ads = [];
      this.gtdi = [];
      this.sec = [];
      this.rds = [];

      dis.forEach((disciplina) => {
        if (disciplina.cod_curso === 'ADS6') {
          this.ads.push(disciplina);
        } else if (disciplina.cod_curso === 'MBI6') {
          this.mbi.push(disciplina);
        } else if (disciplina.cod_curso === 'GDTI6') {
          this.gtdi.push(disciplina);
        } else if (disciplina.cod_curso === 'SEC6') {
          this.sec.push(disciplina);
        } else if (disciplina.cod_curso === 'RDS8') {
          this.rds.push(disciplina);
        }
      });
    });
  }

  displayedColumns: string[] = ['nome_disciplina', 'carga_horaria', 'periodo', 'cod_curso'];

}
