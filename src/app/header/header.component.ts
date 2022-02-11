import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  hasRoute(route:string):boolean{
    return this.router.url.indexOf(route) != -1
  }

  isRoute(route:string):boolean{
    return this.router.url == route
  }
}
