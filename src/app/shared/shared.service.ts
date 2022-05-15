import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  displayMassage:any
  r_massaage:any

  constructor() { }

  sendMassage(s_massage){
    (s_massage !== null && s_massage !== undefined )? this.displayMassage = s_massage :null
  return (this.displayMassage(this.displayMassage))
  }

  recieaveMassage(reciaver:any){
    return this.r_massaage = reciaver
  }
}
