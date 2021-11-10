import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status'];
  dataSource = new MatTableDataSource();
  
 /* dataSource = new MatTableDataSource (ELEMENT_DATA);*/

  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

  selectedMenu:any = 'List';

  goTo(paramText:string){
    this.selectedMenu = paramText
  }

  constructor(private api:ApiService) { }

  ngOnInit() {
   
    this.api.functionGET('appConfiguration/company').subscribe((response)=>{
      this.dataSource = response.result;
      console.log('response', response);
    
  })
}
  
}
