import { Component } from '@angular/core';
import { ItemServiceService } from '../item.service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  produtos: String[] = ['Banana - 3,00kg','Laranja - 5,00kg','Maçã - 2,50kg' , 'Pêra - 4,00kg' , 'Uva - 8,00kg' ,];

  constructor(private carrinho: ItemServiceService){}

  adicionar(item:String) {
    this.carrinho.adicionar(item)

    
  }

}