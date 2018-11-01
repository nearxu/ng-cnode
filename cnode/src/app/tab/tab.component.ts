import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  items = [
    { title: "全部", id: 1, url: 'all' },
    { title: "精华", id: 2, url: 'good' },
    { title: "分享", id: 3, url: 'share' },
    { title: "问答", id: 1, url: 'ask' },
  ]
  constructor(private router: Router) { }
  ngOnInit() {
  }
  @Output() change = new EventEmitter<string>()

  toggleRoute(type: string) {
    this.router.navigate(['/topic', type]);
    this.change.emit(type);
    console.log('toggle', type)
  }

}
