import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  private carrinho: String[] =[]

  constructor() { }

  adicionar(item:String) {
    this.carrinho.push(item) 
    
  }

  remover(itemQEuQro:String){
    let index = this.carrinho.findIndex(itemProcurado=> itemProcurado == itemQEuQro)
    this.carrinho.splice(index,1)
  }
}
