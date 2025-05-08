import { Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProdutoDetalheComponent } from './components/produto-detalhe/produto-detalhe.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'control-flow', component: ControlFlowComponent },
  { path: 'test', component: TestComponent },
  { path: 'produto/:id', component: ProdutoDetalheComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: '**', component: NotfoundComponent },
];
