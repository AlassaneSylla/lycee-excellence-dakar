import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
title = "Lycée d'Excellence de Dakar";
title_text = "Application de gestion";
logo: string = "assets/images/logo_LED-removebg-preview.png";

  constructor() { }

  ngOnInit(): void {
  }

}
