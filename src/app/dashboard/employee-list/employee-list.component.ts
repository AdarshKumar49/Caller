import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'jobTitle' , 'phone'];
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
    this.api.functionGET('company/1/employee?search=&limit=10&page=1&orderBy=ASC&sortBy=createdAt').subscribe((response)=>{
      this.dataSource = response.result.rows;
      console.log('response', response);
  })
  }

}
