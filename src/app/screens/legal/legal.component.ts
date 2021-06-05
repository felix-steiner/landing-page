import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  close(): void {
    this.location.back();
  }
}
