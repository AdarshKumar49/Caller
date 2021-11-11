import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.scss']
})
export class ReimbursementComponent implements OnInit {
  displayedColumns: string[] = ['userName','createdAt', 'amount','expenseDate','eSign'];
  dataSource = new MatTableDataSource();


  @ViewChild('scheduledOrdersPaginator') paginator: MatPaginator;
  @ViewChild(MatSort) set sort(sorter:MatSort) {
    if (sorter) this.dataSource.sort = sorter;
  }
 

  constructor(private api:ApiService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
}

  ngOnInit() {
    this.api.functionGET('reimbursement?').subscribe((response)=>{   this.dataSource.data = response.result.rows;
      console.log('response', response);
     
  })
  
  }

}
