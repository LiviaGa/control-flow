import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Carros } from './interfaces/Carros';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DiretivaComponent } from './components/diretiva/diretiva.component';
import { InterpolacaoComponent } from './components/interpolacao/interpolacao.component';
import { PropertieBindingComponent } from './components/propertie-binding/propertie-binding.component';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components/cliente/cliente.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InterpolacaoComponent, ControlFlowComponent, PropertieBindingComponent, DiretivaComponent,CommonModule,ClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-control-flow';


  carros: Carros[] = [
    { id: 1, nome: "Corsa", marca: "GM", ano: 1996, cor: "amarelo" },
    { id: 2, nome: "Palio", marca: "Fiat", ano: 2006, cor: "vermelho" },
    { id: 3, nome: "Celta", marca: "Wolksvagen", ano: 2008, cor: "preto" }
  ]
}
