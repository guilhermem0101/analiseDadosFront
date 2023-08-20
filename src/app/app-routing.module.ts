import { UserEditComponent } from './alunos/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './alunos/user-list/user-list.component';
import { UserCreateComponent } from './alunos/user-create/user-create.component';
import { NotasComponent } from './funcionalidades/notas-curso/notas.component';
import { GradeCurricularComponent } from './funcionalidades/grade-curricular/grade-curricular.component';
import { ListaCursosComponent } from './funcionalidades/lista-cursos/lista-cursos.component';
import { ListaDiscpComponent } from './funcionalidades/lista-discp/lista-discp.component';
import { AdsComponent } from './funcionalidades/notas-curso/ads/ads.component';
import { GdtiComponent } from './funcionalidades/notas-curso/gdti/gdti.component';
import { MbiComponent } from './funcionalidades/notas-curso/mbi/mbi.component';
import { RdsComponent } from './funcionalidades/notas-curso/rds/rds.component';
import { SecComponent } from './funcionalidades/notas-curso/sec/sec.component';
import { CalendarioComponent } from './calendario/calendario.component';


const routes: Routes = [
  { path: '', redirectTo: '/alunos', pathMatch: 'full' }, // Rota padrão
  { path: 'alunos', component: UserListComponent }, // Rota para listagem de usuários
  { path: 'alunos/cadastro', component: UserCreateComponent }, // Rota para cadastro de usuário
  { path: 'alunos/edit/:id', component: UserEditComponent }, // Rota para edição de usuário com parâmetro ID
  { path: 'calendario', component: CalendarioComponent },
  { path: 'cursos/grade', component: GradeCurricularComponent },
  { path: 'cursos/lista', component: ListaCursosComponent },
  { path: 'lista', component: ListaDiscpComponent },
  { path: 'notas/ads', component: AdsComponent },
  { path: 'notas/gdti', component: GdtiComponent },
  { path: 'notas/mbi', component: MbiComponent },
  { path: 'notas/rds', component: RdsComponent },
  { path: 'notas/sec', component: SecComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
