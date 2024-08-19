import { Routes } from '@angular/router';
import { CadastroVendaComponent } from './Componentes/Venda/CadastroVenda/cadastro-venda/cadastro-venda.component';
import { HomeComponent } from './Componentes/home/home.component';
import { CategoriaComponent } from './Componentes/Categoria/categoria/categoria.component';
import { CadastroCategoriaComponent } from './Componentes/Categoria/cadastro-categoria/cadastro-categoria.component';
import { EditarCategoriaComponent } from './Componentes/Categoria/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './Componentes/Categoria/excluir-categoria/excluir-categoria.component';
import { TamanhoComponent } from './Componentes/Tamanho/tamanho/tamanho.component';
import { CadastroTamanhoComponent } from './Componentes/Tamanho/cadastro-tamanho/cadastro-tamanho.component';
import { EditarTamanhoComponent } from './Componentes/Tamanho/editar-tamanho/editar-tamanho.component';
import { ExcluirTamanhoComponent } from './Componentes/Tamanho/excluir-tamanho/excluir-tamanho.component';
import { MarcaComponent } from './Componentes/Marca/marca/marca.component';
import { CadastroMarcaComponent } from './Componentes/Marca/cadastro-marca/cadastro-marca.component';
import { EditarMarcaComponent } from './Componentes/Marca/editar-marca/editar-marca.component';
import { ExcluirMarcaComponent } from './Componentes/Marca/excluir-marca/excluir-marca.component';
import { LojaComponent } from './Componentes/Loja/loja/loja.component';
import { CadastroLojaComponent } from './Componentes/Loja/cadastro-loja/cadastro-loja.component';
import { EditarLojaComponent } from './Componentes/Loja/editar-loja/editar-loja.component';
import { ExcluirLojaComponent } from './Componentes/Loja/excluir-loja/excluir-loja.component';
import { ProdutoComponent } from './Componentes/Produto/produto/produto.component';
import { CadastroProdutoComponent } from './Componentes/Produto/cadastro-produto/cadastro-produto.component';
import { EditarProdutoComponent } from './Componentes/Produto/editar-produto/editar-produto.component';
import { ExcluirProdutoComponent } from './Componentes/Produto/excluir-produto/excluir-produto.component';
import { ProdutosLojaComponent } from './Componentes/ProdutosLoja/produtos-loja/produtos-loja.component';
import { CadastroProdutoLojaComponent } from './Componentes/ProdutosLoja/cadastro-produto-loja/cadastro-produto-loja.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cadastro', component: CadastroVendaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'cadastro-categoria', component: CadastroCategoriaComponent},
  {path: 'categoria/editar/:id', component: EditarCategoriaComponent},
  {path: 'categoria/excluir/:id', component: ExcluirCategoriaComponent},
  {path: 'tamanho', component: TamanhoComponent},
  {path: 'cadastro-tamanho', component: CadastroTamanhoComponent},
  {path: 'tamanho/editar/:id', component: EditarTamanhoComponent},
  {path: 'tamanho/excluir/:id', component: ExcluirTamanhoComponent},
  {path: 'marca', component: MarcaComponent},
  {path: 'cadastro-marca', component: CadastroMarcaComponent},
  {path: 'marca/editar/:id', component: EditarMarcaComponent},
  {path: 'marca/excluir/:id', component: ExcluirMarcaComponent},
  {path: 'loja', component: LojaComponent},
  {path: 'cadastro-loja', component: CadastroLojaComponent},
  {path: 'loja/editar/:id', component: EditarLojaComponent},
  {path: 'loja/excluir/:id', component: ExcluirLojaComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'cadastro-produto', component: CadastroProdutoComponent},
  {path: 'produto/editar/:id', component: EditarProdutoComponent},
  {path: 'produto/excluir/:id', component: ExcluirProdutoComponent},
  {path: 'produtosLoja/loja/:idloja', component: ProdutosLojaComponent},
  {path: 'produtosLoja/cadastro/:idloja', component: CadastroProdutoLojaComponent}
];
