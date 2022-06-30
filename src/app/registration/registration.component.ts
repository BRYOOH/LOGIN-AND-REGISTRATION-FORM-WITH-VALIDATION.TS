import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registerForm!:FormGroup;

  constructor(private formBuilder:FormBuilder, private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
    email:[''],
    password:[''],
    fName:[''],
    sName:[''],
    city: [''],
    age:[''],
    phone:['']
    })
  }
  onSubmit(){
    this.http.post<any> ("http://localhost:3000/comments", this.registerForm.value)
    .subscribe(res=>{
      alert("Registration Successiful!!");
      this.registerForm.reset();
      this.router.navigate(['home']);
    } ,err=>{
        alert("Something went Wrong!!");
    })
  }

}
