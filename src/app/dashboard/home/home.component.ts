import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/shared/Common/details/details.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'action'];
  dataSource = new MatTableDataSource();


  
 /* dataSource = new MatTableDataSource (ELEMENT_DATA);*/
 @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  

 

  constructor(private api:ApiService , private dialog:MatDialog) { }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}

  ngOnInit() {
   
    this.companyList();
  }

companyList(){
  this.api.functionGET('appConfiguration/company').subscribe((response)=>{
    this.dataSource.data = response.result;
    
})
}
viewDetails(dataSource){
  const dialogRef=this.dialog.open(DetailsComponent,{
    data:{
      title:"Company",
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
