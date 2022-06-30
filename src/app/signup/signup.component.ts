import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  signUp(signInForm:NgForm){
    console.log(signInForm.value);
    this.router.navigate(['registration']);
}

}
