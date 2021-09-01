import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup

  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm=this.fb.group({
      correo:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.minLength(6)]],
    })
  }
  ingresar(){
    alert("Se mandó el formulario, ver console.log para ver datos enviados")
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
