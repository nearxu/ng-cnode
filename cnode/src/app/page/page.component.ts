import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageService } from './page.service';
import { User } from './user.interface';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  items: Observable<User[]>;
  constructor(
    private service: PageService,
    private route: ActivatedRoute
  ) { }
  private type: string;
  ngOnInit() {
    this.route.params.subscribe((params) => this.type = params.type);
    this.handleData(this.type)
  }
  handleData(type: string) {
    this.service.getData(type)
      .subscribe(data => {
        console.log(data, 'data');
        this.items = data.data
      })
  }
  onChange(value) {
    this.handleData(value);
  }
}
