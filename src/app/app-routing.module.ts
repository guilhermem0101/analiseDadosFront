import { UserEditComponent } from './alunos/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './alunos/user-list/user-list.component';
import { UserCreateComponent } from './alunos/user-create/user-create.component';


import { AnaliseDescritivaComponent } from './analise-descritiva/analise-descritiva.component';
import { SerieTemporalComponent } from './serie-temporal/serie-temporal.component';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { InfoComponent } from './info/info.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { SidebartoComponent } from './sidebarto/sidebarto.component';


const routes: Routes = [
  { path: '', redirectTo: '/analise-descritiva', pathMatch: 'full' }, // Rota padrão
  { path: 'alunos', component: UserListComponent }, // Rota para listagem de usuários
  { path: 'alunos/cadastro', component: UserCreateComponent }, // Rota para cadastro de usuário
  { path: 'alunos/edit/:id', component: UserEditComponent }, // Rota para edição de usuário com parâmetro ID
  { path: 'analise-descritiva', component: AnaliseDescritivaComponent }, 
  { path: 'serie-temporal', component: SerieTemporalComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'info-dados', component: InfoComponent },
  { path: 'info-ferramentas', component: FerramentasComponent },
  { path: 'sidebar', component: SidebartoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
