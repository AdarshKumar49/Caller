import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';

import { DetailsComponent } from 'src/app/shared/Common/details/details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.scss']
})
export class ReimbursementComponent implements OnInit {
  displayedColumns: string[] = ['userName','createdAt', 'amount','expenseDate' , 'action'];
  dataSource = new MatTableDataSource();


  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) set sort(sorter:MatSort) {
    if (sorter) this.dataSource.sort = sorter;
  }
 

  constructor(private api:ApiService , private dialog:MatDialog) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}

  ngOnInit() {
    this.reimbursementList();
  }
  reimbursementList(){
    this.api.functionGET('reimbursement?search&fromDate=&toDate=&reimbursementType=&status=&limit=15&page=1&sortBy=status&orderBy=ASC&timeOffset=-330').subscribe((response)=>{this.dataSource.data = response.result.rows;
      //let data = response.result.rows;
     
      //this.dataSource.data = [...data];
      console.log('response', response);
      const removeDuplicates = (array, key) => {
        return array.reduce((arr, item) => {
          const removed = arr.filter(i => i[key] !== item[key]);
          return [...removed, item];
        }, []);
      };
      this.dataSource.data = removeDuplicates(this.dataSource.data, this.displayedColumns[0]);
      }
     
    )}


viewDetails(dataSource){
  const dialogRef=this.dialog.open(DetailsComponent,{
    data:{
      title:"Reimbursement",
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
