import { Component } from '@angular/core';
import { ItemServiceService } from '../item.service.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  
  constructor(private carrinho: ItemServiceService){}

  remover(item:String){
    this.carrinho.remover(item)

  }
}
