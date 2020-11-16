import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  btn: boolean;
  constructor(private service: ShareService, private router: Router) {}
  resultData: any;
  itemsPerPage = 7;
  currentPage = 1;
  deleteByID: any;
  ngOnInit(): void {
    this.getAllEmployee();
  }
  private getAllEmployee() {
    this.service
      .getAllbyPage(this.currentPage, this.itemsPerPage)
      .subscribe((resp: any) => {
        this.resultData = resp['body']['data'];
        console.log(this.resultData);
      });
  }

  pageChange(page: number) {
    this.currentPage = page;
    console.log(page);
    this.getAllEmployee();
  }

  editById(a) {
    localStorage.setItem('id', a);
  }
  deleteData(id) {
    this.service.deleteEmployee(id).subscribe(
      (res) => {
        this.deleteByID = res;
        if (this.deleteByID.body.statusCode == '200') {
          alert(this.deleteByID.body.msg);
          this.getAllEmployee();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  BacktoForm() {
    this.router.navigate(['']);
    localStorage.removeItem('id');
  }
}
