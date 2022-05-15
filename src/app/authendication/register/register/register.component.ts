import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 registration_data:any = [];
 
  constructor(private router:Router,
    //  private SharedService: SharedService
     ) { }

  ngOnInit(): void {

    // this.SharedService.sendMassage ("hello guys its form registration")

  }
  registrationData(data:any){
    console.log(data)
    if (data.status == "INVALID"){
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
