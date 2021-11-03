import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedMenu:any = 'List';

  goTo(paramText:string){
    this.selectedMenu = paramText
  }

  constructor() { }

  ngOnInit(): void {
  }

}
