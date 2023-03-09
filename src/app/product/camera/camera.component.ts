import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {
  cameraImg= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61zne3JPlQS._SX466_.jpg'
  constructor() { }

  ngOnInit() {
  }

}
