import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { ContatosComponent } from './contatos/contatos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sobreMim', component: SobreMimComponent},
  { path: 'meusProjetos', component: MeusProjetosComponent},
  { path: 'contatos', component: ContatosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
