import { Routes } from '@angular/router';
import { CadastroVendaComponent } from './Componentes/Venda/CadastroVenda/cadastro-venda/cadastro-venda.component';
import { HomeComponent } from './Componentes/home/home.component';
import { CategoriaComponent } from './Componentes/Categoria/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Componentes/Categoria/Formulário-cadastro/cadastro-categoria/cadastro-categoria.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroVendaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cadastro-categoria', component: CadastroCategoriaComponent}
];
