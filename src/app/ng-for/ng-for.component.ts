import { Component, OnInit } from "@angular/core";
import { Movie } from "../models/movie";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.css"],
})
export class NgForComponent implements OnInit {
  title: string = "Top 3 Bollywood Movies";

  movies: Movie[] = [
    {
      title: "3 Idiots",
      director: "Rajkumar",
      cast: "Amir",
      releaseDate: "2009",
    },
    {
      title: "Tumbbad",
      director: "Rahi Barve",
      cast: "Rahi",
      releaseDate: "2018",
    },
    {
      title: "Kantara",
      director: "Rishab",
      cast: "Rishab",
      releaseDate: "2022",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
