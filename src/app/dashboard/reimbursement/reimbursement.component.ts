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
  displayedColumns: string[] = ['userName','reimbursementNumber', 'userId'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true} ) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
 

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.functionGET('reimbursement?').subscribe((response)=>{   this.dataSource = response.result.rows;
      console.log('response', response);
  })
  
  }

}
