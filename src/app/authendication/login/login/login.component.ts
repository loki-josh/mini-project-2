// import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  

  email:any;
  emailError:any 
  passwordError:any 

  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  submitForm(form:any){
    console.log(form)
    if (form.status == "INVALID"){
      window.alert("please enter the fields")
    }
    else{
      this.bodyOpening()
       
      
    }
    
  }
  bodyOpening(){
    this.router.navigate([('./main-body')])
  }
 


}


