import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productosList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{

  product?: Product;
  productList: Product[] = productosList;
  loading: boolean = true;
  color: string = '';

  constructor(private _route: ActivatedRoute){ }

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params =>{
        this.product = this.productList.find(product => product.id == params['productId']);
        this.color = this.product?.price as number > 5 ? 'red':'' 
        this.loading = false; 
    });
      
    }, 1500);
  }

}
