import { Component, OnInit } from '@angular/core';
import { CnodeService } from '../cnode.service';
@Component({
  selector: 'app-n',
  templateUrl: './n.component.html',
  styleUrls: ['./n.component.scss']
})
export class NComponent implements OnInit {
  data: []
  constructor(private cnodeService: CnodeService) { }

  ngOnInit() {
    this.getData()
  }
  getData() {
    this.cnodeService.getData()
      .subscribe(data => {
        console.log(data, 'data,n')
        this.data = data
      })
  }
}
