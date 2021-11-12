import { Component, OnInit ,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA , MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details:any;

  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
    this.details =this.data;
    console.log(this.details);
  }

}
