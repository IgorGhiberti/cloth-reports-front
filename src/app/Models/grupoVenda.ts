export interface Grupo_Venda{
  idgrupovenda: number,
  produto: string,
  valor_unitario_venda: number,
  data_venda: Date,
  idprodutoloja: number,
  quantidade_vendido: number,
  loja: string,
  total: number
}
