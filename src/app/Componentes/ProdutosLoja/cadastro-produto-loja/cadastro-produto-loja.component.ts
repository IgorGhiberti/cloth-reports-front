import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoView } from '../../../Models/produtoview';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../Services/produto.service';
import { LojaService } from '../../../Services/loja.service';
import { Loja } from '../../../Models/loja';
import { ProdutosLoja } from '../../../Models/produtosLoja';
import { ProdutosLojaService } from '../../../Services/produtos-loja.service';

@Component({
  selector: 'app-cadastro-produto-loja',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './cadastro-produto-loja.component.html',
  styleUrl: './cadastro-produto-loja.component.scss'
})
export class CadastroProdutoLojaComponent implements OnInit {

  produtoLojaForm!: FormGroup;
  produtos: ProdutoView[] = [];
  loja!: Loja;
  produtoLoja: ProdutosLoja | null = null;
  idloja!: number;
  idproduto!: number;

  constructor(private router: Router,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private lojaService: LojaService,
    private produtoLojaService: ProdutosLojaService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('idloja'));
    this.idloja = id;
    this.getProdutos();
    this.getLojas();
    this.produtoLojaForm = new FormGroup({
      idprodutoloja: new FormControl(0),
      idproduto: new FormControl(0, Validators.required),
      idloja: new FormControl(this.idloja)
    })
  }

  //Pega todos os produtos
  getProdutos()
  {
    this.produtoService.getProdutos().subscribe({
      next: res => {
        this.produtos = res,
        console.log(this.produtos)
      },
      error: err => console.log(err)
    })
  }

  //Pega todas as lojas
  getLojas()
  {
    this.lojaService.getLojaById(this.idloja).subscribe({
      next: res => this.loja = res,
      error: err => console.log(err)
    })
  }

  //Redireciona a rota
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  //Submit
  submit()
  {
    if(this.produtoLojaForm.valid){
      const formValue = this.produtoLojaForm.value;
      formValue.idproduto = Number(formValue.idproduto);
      console.log(JSON.stringify(formValue));
    }

  }

  //Cadastrar
  cadastroProdutoLoja()
  {
    const formValue = this.produtoLojaForm.value;
    formValue.idproduto = Number(formValue.idproduto);
    this.produtoLojaService.postProdutosLoja(this.idloja, formValue).subscribe({
      next: res => {
        this.produtoLoja = res,
        console.log('Valor cadastrado', this.produtoLoja)
        console.log('chamou')
      },
      error: err => console.log(err)
    })
    this.router.navigateByUrl('produtosLoja/loja/' + this.idloja)
  }

}
