import { Component } from '@angular/core';
import { FuncionalidadesService } from '../service/funcionalidades.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {

  constructor(private service: FuncionalidadesService) { }

  listaProdutos!: any[]


  ngOnInit() {
    this.service.getProdutos().subscribe((produtos: any[]) => {
      this.listaProdutos = produtos;
    });
  }

  displayedColumns: string[] = ['Product', 'Preco'];
}
