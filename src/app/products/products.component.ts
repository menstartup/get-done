import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../products.service';
import { Products } from './../products'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Products[]=[]
  constructor(
    private ProductsService : ProductsService    
  ) { }

  ngOnInit() {
    this.products = this.ProductsService.getAllProducts()
  }

}
