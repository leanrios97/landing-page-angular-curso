import { Component } from '@angular/core';
import { productosList } from './products.mock'; 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  productosList = productosList;
  
}
