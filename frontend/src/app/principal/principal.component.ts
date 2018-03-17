import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public isCollapsed = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public activeRoute(routename: string): boolean {
    console.log(this.router.url);
    return this.router.url.indexOf(routename) > -1;
  }

}
