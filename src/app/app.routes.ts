import { Routes } from '@angular/router';
import { CadastroVendaComponent } from './Componentes/Venda/CadastroVenda/cadastro-venda/cadastro-venda.component';
import { HomeComponent } from './Componentes/home/home.component';
import { CategoriaComponent } from './Componentes/Categoria/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Componentes/Categoria/cadastro-categoria/cadastro-categoria.component';
import { EditarCategoriaComponent } from './Componentes/Categoria/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './Componentes/Categoria/excluir-categoria/excluir-categoria.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroVendaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cadastro-categoria', component: CadastroCategoriaComponent},
  {path: 'categoria/editar/:id', component: EditarCategoriaComponent},
  {path: 'categoria/excluir/:id', component: ExcluirCategoriaComponent}
];
