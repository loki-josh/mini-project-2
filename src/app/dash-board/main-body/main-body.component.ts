import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  constructor(
    // private SharedService:SharedService
  ) { }

  ngOnInit(): void {

    // console.log(this.SharedService.recieaveMassage())
  }

}
