import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-serie-temporal',
  templateUrl: './serie-temporal.component.html',
  styleUrls: ['./serie-temporal.component.css']
})
export class SerieTemporalComponent {
  api: string = "https://flask-production-9397.up.railway.app"
  period: string = 'W';
  serieUrl: string = this.api + "/vendas-serie?periodo=" + this.period;
  formatdataMin!: string;
  formatdataMax!: string;
  periodForm!: FormGroup;
  minDate = new Date(2019, 0, 1);  // January 1, 2019
  maxDate = new Date(2019, 11, 31);  // December 31, 2019
  periodos: any[] = [
    { value: 'D', viewValue: 'Dia' },
    { value: 'W', viewValue: 'Semana' },
    { value: 'M', viewValue: 'Mês' },
  ];

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  get selectedPeriod() {
    return this.periodForm.get('selectedPeriod');
  }

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
    function formatDate(date: any): string {
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }
    if (this.selectedPeriod) {
      this.period = this.selectedPeriod.value.toString();
    } else {}
    console.log(this.period);
    
    this.formatdataMin = formatDate(this.getSelectedDateRange().start)
    this.formatdataMax = formatDate(this.getSelectedDateRange().end)


    this.serieUrl = "https://flask-production-9397.up.railway.app/vendas-serie?periodo=" + this.period + "&data_inicial=" + this.formatdataMin + "&data_final=" + this.formatdataMax
    
  }
}
