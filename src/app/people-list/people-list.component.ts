import { Component, OnInit } from '@angular/core';
import { ListService } from '../service/list.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  constructor(private listservice: ListService) { }
  userList: any;

  ngOnInit(): void {
    this.getList();
  }
  getList() {
    this.listservice.getUserList()
      .subscribe((Response: any) => {
        this.userList = Response.data;
      });

  }
}
