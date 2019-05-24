import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Products } from './../products';
import { ProductsService } from './../products.service'
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productDetail: Products = null
  constructor( 
    public activatedRoute: ActivatedRoute,
    public ProductsService: ProductsService
  ) { }

  ngOnInit() {
    let id = (+this.activatedRoute.snapshot.params['id']);
    this.productDetail = this.ProductsService.getProductByID(id);
    console.log(this.productDetail)
  }

}
