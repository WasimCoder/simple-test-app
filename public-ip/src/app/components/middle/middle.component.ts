import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { IPInterface } from 'src/app/interfaces/interfaces';
import { IpService } from 'src/app/services/ip.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.scss']
})
export class MiddleComponent implements OnInit{
constructor(private http: HttpClient, private ip: IpService){ }
  data!:any;
ngOnInit() : void{
  this.ip.getIpData('182.156.212.133').subscribe((response:Object)=>{
      console.log(response)
      this.data= response
      console.log(this.data)
    })
}
}
