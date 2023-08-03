
import { Component, OnInit } from '@angular/core';
import { publicIp, publicIpv4 } from 'public-ip';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  date = new Date;
  currentDate:string=''
  public_ip:string=''
  constructor(){
  }
 
ngOnInit(): void {
this.currentDate= `${this.date.getDate()}-${this.date.getUTCMonth()+1}-${this.date.getFullYear()}`
publicIpv4().then((ip)=> this.public_ip = ip)
}
}
