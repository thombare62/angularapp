import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  watchImg= 'https://s3b.cashify.in/gpro/uploads/2022/10/06205700/Pixel-Watch.jpg'
  constructor() { }

  ngOnInit() {
  }

}
