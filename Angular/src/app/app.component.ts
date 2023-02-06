import ventas from "./data/Data";  
import { Component } from '@angular/core';
import { Venta } from "./models/Venta";

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestService } from "./services/Rest";

const vent = 
  {
    "id": 9,
    "factura": "F001-00001260",
    "fecha": "2022-02-05T14:00:00",
    "cliente": "TRANSPORTE 77",
    "producto": "PAPEL A4",
    "vendedor": "Nella Aguilar",
    "total": 1500.33
  }
;
export default vent; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Softtek';
  name = 'Elmer'; 
  ventas: Venta[] = ventas;
  vent: Venta = vent; 
  Something1 = "Maricarmen";
  Something2 = () => {return "Muriel"}; 
  //Api  = "http://localhost:5026/GestionVentas/Listar";
  //Apis = "https://localhost:7035/GestionVentas/Listar";
  //Apia = "http://localhost:4200/Data.json";
  Apir = "/GestionVentas/Listar";
  
  public JsonVentas:any = []; 

  ngOnInit(): void {
     this.LoadAPI();
  }
  
  constructor(private RestService:RestService) { }

  public LoadAPI(){
    
    this.RestService.get(this.Apir).subscribe(rpta => {
      console.log(rpta);
      this.JsonVentas = rpta; 
    })
  }
}
