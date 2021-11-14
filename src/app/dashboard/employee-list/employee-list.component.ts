import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';

import { DetailsComponent } from 'src/app/shared/Common/details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'jobTitle' , 'phone', 'action'];
  dataSource = new MatTableDataSource();
  
 /* dataSource = new MatTableDataSource (ELEMENT_DATA);*/

 @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private api:ApiService , private dialog: MatDialog) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}


  ngOnInit() {
    this.employeeList();
  }

  employeeList(){

    this.api.functionGET('company/1/employee?search=&limit=147&page=1&orderBy=ASC&sortBy=createdAt').subscribe((response)=>{
      this.dataSource.data = response.result.rows;
      console.log('response', response);
  })

  
}
viewDetails(dataSource){
  const dialogRef=this.dialog.open(DetailsComponent,{
    data:{
      title:"Employee",
      item:dataSource
    }
  });
  dialogRef.afterClosed().subscribe(result=>{
    console.log("console ", result)
  //  if (result){
     // this.toastr.success("popup closed")
  //  }
  })
}
}
