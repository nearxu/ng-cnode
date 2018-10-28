import { Component, OnInit } from '@angular/core';
import {CnodeService} from '../cnode.service';
@Component({
  selector: 'app-n',
  templateUrl: './n.component.html',
  styleUrls: ['./n.component.scss']
})
export class NComponent implements OnInit {
  data:[]
  constructor(private cnodeService:CnodeService) { }

  ngOnInit() {
    this.getData()
    console.log(this.data,'data')
  }
  getData(){
    this.cnodeService.getData()
      .subscribe(data => this.data = data)
  }
}
