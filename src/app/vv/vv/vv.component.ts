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
    this.vvService.getPDF(
    ).subscribe(() => {
      console.log("vv dl done")
    });
  }
}
