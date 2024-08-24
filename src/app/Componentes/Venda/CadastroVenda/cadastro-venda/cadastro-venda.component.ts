import { Component, OnInit } from '@angular/core';
import { ProdutosLoja } from '../../../../Models/produtosLoja';
import { Grupo_Venda } from '../../../../Models/grupoVenda';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutosLojaService } from '../../../../Services/produtos-loja.service';
import { Loja } from '../../../../Models/loja';
import { LojaService } from '../../../../Services/loja.service';
import { Router } from '@angular/router';
import { GrupoVendaService } from '../../../../Services/grupo-venda.service';
import { Produto } from '../../../../Models/produto';
import { VendasService } from '../../../../Services/vendas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-venda',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cadastro-venda.component.html',
  styleUrl: './cadastro-venda.component.scss'
})
export class CadastroVendaComponent implements OnInit {

  produtosLoja: ProdutosLoja [] = [];
  vendaDetalhada!: Grupo_Venda;
  contador: number = 0;
  produto!: Produto;
  lojas: Loja [] = [];
  gruposVenda: Grupo_Venda [] = [];
  grupoVenda!: Grupo_Venda;
  selectedProduto: ProdutosLoja | null | undefined;
  valorFinal: number = 0;
  grupo_VendaForm!: FormGroup;
  idLoja!: number;

  constructor(private produtosLojaService: ProdutosLojaService,
    private lojaService: LojaService,
    private router: Router,
    private grupoVendaSerivce: GrupoVendaService,
    private vendaService: VendasService
  ){}

  ngOnInit(): void {
    this.getLojas();
    this.grupo_VendaForm = new FormGroup({
      idgrupovenda: new FormControl(0),
      idprodutoloja: new FormControl(0, Validators.required),
      data_venda: new FormControl(0),
      quantidade_vendido: new FormControl(1, [Validators.required, Validators.min(1)])
    })
  }

  //Quando o produto mudar, selecione o produto atual
  onProdutoChange(event: Event)
  {
    const selectedProdutoId = (event.target as HTMLSelectElement).value;
    this.selectedProduto = this.produtosLoja.find(produto => produto.idprodutoloja === parseInt(selectedProdutoId, 10));
    if (this.selectedProduto) {
      this.updateValorFinal();
    } else {
      console.error('Produto não encontrado!');
    }
  }

  //Quando a quantidade mudar, atualize o valor
  onQuantidadeChange(event: Event): void {
    this.updateValorFinal();
  }

  //Atualiza o valor final
  updateValorFinal(): void {
    const quantidadeVendida = this.grupo_VendaForm.get('quantidade_vendido')?.value || 0;
    const valorUnitario = this.selectedProduto?.valor_unitario || 0;
    this.valorFinal = quantidadeVendida * valorUnitario;
    console.log('Valor uni: ', valorUnitario, 'valor finla: ', this.valorFinal, 'quantidade venda: ', quantidadeVendida)
  }

  //Retorna os produtos de acordo com a loja selecionada
  onLojaChange(event: Event): void
  {
    const target = event?.target as HTMLSelectElement
    this.idLoja = Number(target.value)
    this.produtosLojaService.getProdutosLojas(this.idLoja).subscribe({
      next: res => {
          this.produtosLoja = res,
          console.log('Atualizando os produtos loja', this.produtosLoja)
      },
      error: err => {
        if (err.status == 404){
          this.produtosLoja = [];
        }
      }
    })
  }

  //Retorna as lojas
  getLojas()
  {
    this.lojaService.getLojas().subscribe({
      next: res => this.lojas = res,
      error: err => console.error('Erro ao buscar os produtos loja', err)
    })
  }

  //Redireciona a rota
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Cadastra a venda e depois o grupo venda
  cadastrarVendaEGrupoVenda()
  {
      this.gruposVenda.forEach(gpVenda => {
        this.grupoVendaSerivce.postGrupoVenda(gpVenda).subscribe({
          next: res => {
            this.grupoVenda = res,
            console.log('valor grupo venda: ', this.grupoVenda)
          },
          error: err => console.log(err)
        })
      })
      this.gruposVenda = [];
      this.router.navigateByUrl('')
  }

  //Adiciona as vendas pra tabela de vendas
  addVenda(): void {
    if(this.selectedProduto && this.selectedProduto.quantidade_produto > 0){
      if (this.grupo_VendaForm.valid) {
        const formValue: Grupo_Venda = this.grupo_VendaForm.value;
        this.vendaDetalhada = {
          ...formValue,
          produto: this.selectedProduto?.nome || '', // Adiciona o nome do produto
          loja: this.lojas.find(loja => loja.idloja === this.idLoja)?.nome || '',
          valor_unitario: this.selectedProduto?.valor_unitario || 0
        };
        this.gruposVenda.push(this.vendaDetalhada);  // Adiciona a venda detalhada ao array
        console.log('Venda adicionada: ', this.vendaDetalhada);
        this.selectedProduto.quantidade_produto = this.selectedProduto.quantidade_produto - this.vendaDetalhada.quantidade_vendido
      }
    }
    else{
      alert('Só é possível adicionar produtos com ao menos 1 unidade disponível!')
    }
  }

  //Exclui a venda do formulário
  excluirVenda(index: number)
  {
    const vendaExcluida = this.gruposVenda[index];
    if(this.selectedProduto)
    {
      this.selectedProduto.quantidade_produto = vendaExcluida.quantidade_vendido + this.selectedProduto.quantidade_produto
    }
    this.gruposVenda.splice(index, 1);
  }

  //Aumentar quantidade
  aumentarQtd(index: number)
  {
    if(this.selectedProduto && this.selectedProduto?.quantidade_produto > this.gruposVenda[index].quantidade_vendido)
    {
      this.gruposVenda[index].quantidade_vendido ++
    }

  }

  //Diminuir quantidade
  diminuirQtd(index: number)
  {
    if(this.selectedProduto && this.selectedProduto.quantidade_produto >= this.gruposVenda[index].quantidade_vendido)
    {
      if(this.gruposVenda[index].quantidade_vendido > 1)
        {
          this.gruposVenda[index].quantidade_vendido --
        }
    }


  }

  //Submit do formulário grupo venda
  submitGrupoVenda()
  {
    if(this.grupo_VendaForm.valid){
      const formValue = this.grupo_VendaForm.value;
      // formValue.idproduto = Number(formValue.idproduto);
      console.log(JSON.stringify(formValue));
    }
  }

}
