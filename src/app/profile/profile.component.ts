import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private listservice: ListService) { }

  singleUser: any;
 
  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.listservice.getSingleUserList()
      .subscribe((Response: any) => {
        this.singleUser = Response.data;
      });
  }

}
