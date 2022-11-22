import { Component, OnInit } from '@angular/core';
import { ApiService } from 'service/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // to hold search parameters

   searchTerm = ''

   UserList:any =[]
  constructor(private api :ApiService) { }
  ngOnInit(): void {
    this.api.getAllUser().subscribe((result:any)=>{
      this.UserList =result.users
      console.log(this.UserList);
      
      
    })

    // to get search term

    this.api.search.subscribe((result)=>{
      this.searchTerm=result
    })
  }

}
