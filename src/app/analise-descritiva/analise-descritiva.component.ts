import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-analise-descritiva',
  templateUrl: './analise-descritiva.component.html',
  styleUrls: ['./analise-descritiva.component.css']
})
export class AnaliseDescritivaComponent {
  api: string = "https://flask-production-9397.up.railway.app"
  period: string = 'W';
  serieUrl: string = this.api + "/vendas-serie?periodo=" + this.period;
  vendasByCity: string = this.api + "/vendas-por-cidade"
  vendasByProduto: string = this.api + "/produtos-contagem"
  vendasBySales: string = this.api + "/vendas-por-produto"
  vendasByHorario: string = this.api + "/vendas-por-horario"
  vendasByValor: string = this.api + "/vendas-por-valor"
  histogramaProdutos: string = this.api + "/histograma-de-produtos"
  selectedMinDate!: Date;
  selectedMaxDate!: Date;
  formatdataMin!: string;
  formatdataMax!: string;


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  getSelectedDateRange() {
    const startValue = this.range.get('start')?.value;
    const endValue = this.range.get('end')?.value;

    return {
      start: startValue,
      end: endValue
    };
  }
  submitDates() {
    // Aqui você pode acessar as datas selecionadas usando this.min e this.max
    function formatDate(date:any): string {
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }

    this.formatdataMin = formatDate(this.getSelectedDateRange().start)
    this.formatdataMax = formatDate(this.getSelectedDateRange().end)
    console.log(this.formatdataMin);
    console.log(this.formatdataMax);

    this.serieUrl = "https://flask-production-9397.up.railway.app/vendas-serie?periodo=" + this.period + "&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    this.vendasByCity = "https://flask-production-9397.up.railway.app/vendas-por-cidade?&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    this.vendasByProduto = "https://flask-production-9397.up.railway.app/produtos-contagem?&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    this.vendasByHorario = "https://flask-production-9397.up.railway.app/vendas-por-horario?&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    this.vendasByValor = "https://flask-production-9397.up.railway.app/vendas-por-valor?&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    this.vendasBySales = "https://flask-production-9397.up.railway.app/vendas-por-produto?&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
  }

}
