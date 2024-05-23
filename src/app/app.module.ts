import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SobreMimComponent } from './sobre-mim/sobre-mim.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContatosComponent } from './contatos/contatos.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreMimComponent,
    HeaderComponent,
    FooterComponent,
    ContatosComponent,
    MeusProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
