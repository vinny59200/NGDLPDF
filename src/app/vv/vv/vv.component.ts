import { Component, OnInit } from '@angular/core';
import { VvService } from '../vv.service';

@Component({
  selector: 'app-vv',
  templateUrl: './vv.component.html',
  styleUrls: ['./vv.component.css']
})
export class VvComponent implements OnInit {

  constructor(private vvService:VvService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments = (): void => {
    let time=new Date().getTime();
    console.log("vv before dl")
    this.vvService.getPDF(
    ).subscribe(() => {
      console.log("vv dl done:"+( new Date((new Date().getTime()-time)).getSeconds()))
    });
  }
}
