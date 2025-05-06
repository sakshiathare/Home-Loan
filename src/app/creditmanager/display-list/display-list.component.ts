import { CommonService } from './../../Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Docmodel } from 'src/app/model/docmodel';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit {

  constructor( private commonService:CommonService) { }
  retrievedDoc!:Docmodel[]
  ngOnInit(): void {
    this.commonService.getAllDocument().subscribe((list:Docmodel[])=>{this.retrievedDoc=list})
  }

}
