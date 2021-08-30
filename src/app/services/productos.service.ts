import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Producto} from "src/app/interfaces/Productos"
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }
  getAll(){
    return this.http.get("https://jsonfy.com/items",/*{
      headers:{

      }
    }*/)
  }
  getAllPromise(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod",/*{
      headers:{

      }
    }*/).toPromise()
  }
  getById(id:string){
    return this.http.get("https://api.mercadolibre.com/items/"+id).toPromise()
  }
}
