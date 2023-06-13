import { Component } from '@angular/core';
// para trabajar con los microservicios
import { HttpClient } from '@angular/common/http';
import { RouteConfigLoadEnd } from '@angular/router';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  // inyeccionde dependecias = algo similar a instanciar un objeto
  constructor(private httpClient: HttpClient){

  }
  ngOnInit():void{
    // this.getProducts();
    // this.getProduct();
    // this.createProduct();
    // this.updateProduct();
    this.deleteProduct();
  }
    getProducts(){
      // objeto . metodo =this.httpClient.get
      // se crea una constante para almacenar el backend
      const url = 'https://api.escuelajs.co/api/v1/products'
    const response =  this.httpClient.get(url).subscribe(
      // subscribe = para colocarse en una linea de tiempo
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend
    console.log(response);
    };
    getProduct(){
      // objeto . metodo =this.httpClient.get
      // se crea una constante para almacenar el backend
      const url = 'https://api.escuelajs.co/api/v1/products/254'
    const response =  this.httpClient.get(url).subscribe(
      response => {
        console.log(response);
      }
    ); //haciendo una peticion al backend
    console.log(response);

  };
  createProduct(){
    const data = {
      "title": "Zapatos",
      "price": 30,
      "description": "Zapatos / Oscar Nogales",
      "categoryId": 1,
      "images": [
        "https://picsum.photos/640/640?r=4213",
        "https://picsum.photos/640/640?r=7623",
        "https://picsum.photos/640/640?r=9048",

      ]
    }
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response =>{
        console.log(response);
      })
  };
  updateProduct(){
    const data = {
      "title": "Zapatos New Balance",
      "price": 60,
      "description": "Zapatos 530 / Oscar Nogales"
    }
    const url = 'https://api.escuelajs.co/api/v1/products/459';
    this.httpClient.put(url, data).subscribe(
      response =>{
        console.log(response);
      });
  };
  deleteProduct(){
    const url = 'https://api.escuelajs.co/api/v1/products/462';
    this.httpClient.delete(url).subscribe(
      respose =>{
        console.log(respose)
      }
    )
  }
}