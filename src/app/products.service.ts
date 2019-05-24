import { Injectable } from '@angular/core';
import { Products } from './products'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Products[] =[
    {
      id: 1,
      name: 'iphone 8',
      price: 10000000,
      status: true,
    },
    {
      id: 2,
      name: 'iphone X',
      price: 18000000,
      status: true,
    },
    {
      id: 3,
      name: 'iphone XS',
      price: 20000000,
      status: false,
    },
    {
      id: 4,
      name: 'SamSung note8',
      price: 15000000,
      status: true,
    },
  ]

  constructor() { }
  getAllProducts(){
    return this.products
  }
  getProductByID(id:number){
    let result = null;
    for(var i = 0; i< this.products.length; i++){
      if(this.products[i].id == id){
        result = this.products[i];
        break;
      }
    }
    return result
  }
}
