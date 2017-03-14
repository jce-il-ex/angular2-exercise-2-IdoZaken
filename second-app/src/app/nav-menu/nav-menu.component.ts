import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
 itemList = 
    [{id:1, txt:"main"} ,
     {id:2, txt:"search"},
     {id:3, txt:"news"},
     {id:4, txt:"about"}]

  constructor() { }

  ngOnInit() {

    
  }

}
