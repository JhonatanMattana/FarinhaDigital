import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
