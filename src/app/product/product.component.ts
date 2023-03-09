import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  image= 'https://i0.wp.com/www.alphr.com/wp-content/uploads/2022/03/How-to-Find-the-Model-Number-on-a-Laptop.jpg?fit=2000%2C1125&ssl=1'
  imageMob= 'https://kddi-h.assetsadobe3.com/is/image/content/dam/au-com/mobile/mb_img_58.jpg?scl=1'
  cameraImg= 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61zne3JPlQS._SX466_.jpg'
  watchImg= 'https://s3b.cashify.in/gpro/uploads/2022/10/06205700/Pixel-Watch.jpg'
  constructor() { }

  ngOnInit() {
  }

}
