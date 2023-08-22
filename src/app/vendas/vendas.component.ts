import { Component } from '@angular/core';
import { FuncionalidadesService } from '../service/funcionalidades.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent {
  constructor(private service: FuncionalidadesService) { }

  listaVendas!: any[]


  ngOnInit() {
    this.service.getVendas().subscribe((vendas: any[]) => {
      this.listaVendas = vendas;
    });
  }

  displayedColumns: string[] = ['Product', 'Quantity', 'Order', 'Sales','Address'];
}
