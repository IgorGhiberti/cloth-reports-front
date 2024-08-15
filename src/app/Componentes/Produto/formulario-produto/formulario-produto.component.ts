import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProdutoView } from '../../../Models/produtoview';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../Services/produto.service';
import { Produto } from '../../../Models/produto';
import { Marca } from '../../../Models/marca';
import { MarcaService } from '../../../Services/marca.service';
import { Categoria } from '../../../Models/categoria';
import { Tamanho } from '../../../Models/tamanho';
import { TamanhoService } from '../../../Services/tamanho.service';
import { CategoriaService } from '../../../Services/categoria.service';

@Component({
  selector: 'app-formulario-produto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-produto.component.html',
  styleUrl: './formulario-produto.component.scss'
})
export class FormularioProdutoComponent {

  @Output() onSubmitFunction = new EventEmitter<Produto>();
  @Input() btnTitulo!: string;
  @Input() btnAcao!: string;
  @Input() isDisabled: boolean = false;
  @Input() dadosProduto: Produto | null = null;
  @Input() visualizacaoProduto: ProdutoView | null = null;
  produtoForm!: FormGroup;
  marcas: Marca [] = [];
  categorias: Categoria [] = [];
  tamanhos: Tamanho [] = [];
  produto!: Produto;
  produtoView!: ProdutoView;
  idNumber!: number;
  constructor(private router: Router,
    private marcaService: MarcaService,
    private tamanhoService: TamanhoService,
    private categoriaSerivce: CategoriaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.idNumber = id;
    this.getMarcas();
    this.getTamanhos();
    this.getCategorias();
    this.produtoForm = new FormGroup({
      idproduto: new FormControl(this.dadosProduto ? this.dadosProduto.idproduto: 0),
      nome: new FormControl({value: this.dadosProduto ? this.dadosProduto.nome: '', disabled: this.isDisabled}, [Validators.required]),
      valor_unitario: new FormControl({value: this.dadosProduto ? this.dadosProduto.valor_unitario: 0, disabled: this.isDisabled}, [Validators.required]),
      idcategoria: new FormControl({value: this.dadosProduto ? this.dadosProduto.idcategoria: 0, disabled: this.isDisabled}, [Validators.required]),
      idtamanho: new FormControl({value: this.dadosProduto ? this.dadosProduto.idtamanho: 0, disabled: this.isDisabled}, [Validators.required]),
      idmarca: new FormControl({value: this.dadosProduto ? this.dadosProduto.idmarca: 0, disabled: this.isDisabled}, [Validators.required])
    })
  }

  //Redireciona a rota
  btnRedirect(event: Event, rota: string)
  {
    event.preventDefault();
    this.router.navigateByUrl(rota);
  }

  submitFunction()
  {
    this.onSubmitFunction.emit(this.produtoForm.value);
  }

  //Retorna todas as marcas para o usuário selecionar
  getMarcas()
  {
    this.marcaService.getMarcas().subscribe({
      next: res => this.marcas = res,
      error: err => console.log(err)
    })
  }

  //Retorna todos os tamanhos
  getTamanhos()
  {
    this.tamanhoService.getTamanho().subscribe({
      next: res => this.tamanhos = res,
      error: err => console.log(err)
    })
  }

  //Retorna todas as categoria
  getCategorias()
  {
    this.categoriaSerivce.getCategorias().subscribe({
      next: res => this.categorias = res,
      error: err => console.log(err)
    })
  }
}
