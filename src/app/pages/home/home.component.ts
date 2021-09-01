import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any=[]
  constructor(private productosService:ProductosService) { 
    this.getProductos()
  }
  async getProductos(){
    //Promise
    const response:any = await this.productosService.getAllPromise()
    console.log("Response",response)
    this.productos = response.results
  }

  ngOnInit(): void {

  }

}
