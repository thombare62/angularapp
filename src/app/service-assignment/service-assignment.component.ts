import { Component, OnInit } from "@angular/core";
import { MyService } from "../myService/myservice.service";

@Component({
  selector: "app-service-assignment",
  templateUrl: "./service-assignment.component.html",
  styleUrls: ["./service-assignment.component.css"],
})
export class ServiceAssignmentComponent implements OnInit {
  namesearch: string = '';
  users;
  products = {};
  
  constructor(private myservice: MyService, private demoService: MyService) {}

  ngOnInit() {
    this.products = this.myservice.products;
    this.demoService.getUsers().subscribe(
      (res) => {
        console.log("user api results", res);
        this.users = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
