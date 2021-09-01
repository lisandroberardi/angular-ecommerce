import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup
 
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm=this.fb.group({
      nombre:["",[Validators.required]],
      correo:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.minLength(6)]],
    })
  }
  registrarse(){
    alert("Se mandó el formulario, ver console.log para ver datos enviados")
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
