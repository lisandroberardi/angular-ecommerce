import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RegistroComponent } from './pages/registro/registro.component'; //Incluir
import { HttpClientModule  } from '@angular/common/http';
import { ConcatenarTextoPipe } from './concatenar-texto.pipe';
import { LoginComponent } from './pages/login/login.component';
import { DetalleComponent } from './pages/detalle/detalle.component';//Incluir
import { ListadosModule } from './listados/listados.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    RegistroComponent,
    ConcatenarTextoPipe,
    LoginComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListadosModule,
    HttpClientModule, //Incluir
    FormsModule, //Incluir
    ReactiveFormsModule //Incluir
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
