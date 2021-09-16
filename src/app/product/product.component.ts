import { Component, OnInit } from '@angular/core';
import { products } from '../mocks';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList = products;
  constructor() {
    console.log(products);
   }

  ngOnInit(): void {
  }

}
