import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar-left',
  templateUrl: './navbar-left.component.html',
  styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {
  private cars:any = [
    {
      vin:1,
      year:2015,
      brand:'aqa',
      color:'white'
    },
    {
      vin:2,
      year:2015,
      brand:'aqa',
      color:'back'
    }
  ]
  constructor() { }

  ngOnInit() {

  }

}
