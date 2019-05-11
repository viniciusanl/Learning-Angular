import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './barra-nav/barra-nav.component';
import { HomeComponent } from './home/home.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { ContatoComponent } from './contato/contato.component';
import { CadProdutoComponent } from './cad-produto/cad-produto.component';
import { NavAdmComponent } from './nav-adm/nav-adm.component';
import { CadFuncionarioComponent } from './cad-funcionario/cad-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    HomeComponent,
    TelaLoginComponent,
    ProdutosComponent,
    FooterPageComponent,
    ContatoComponent,
    CadProdutoComponent,
    NavAdmComponent,
    CadFuncionarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
