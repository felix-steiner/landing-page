import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isMobileMenuShown = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenu(show: boolean): void {
   this.isMobileMenuShown = show;
  }
}
