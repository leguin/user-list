import { Component, OnInit } from "@angular/core";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Component({
  selector: 'user-list',
  template: `
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Age</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let user of _users; let i = index">
      <th scope="row">{{i}}</th>
      <td>{{user.name}}</td>
      <td>{{user.lastname}}</td>
      <td>{{user.age}}</td>
      <td>{{user.address}}</td>
    </tr>
  </tbody>
</table>
  `
})


export class UserListComponent implements OnInit {
   
  private _users: Array<User>; 

  constructor(private userService : UserService) {
     
  }

  ngOnInit(): void {
     this._users = this.userService.getUsers();
  }
   
  // users: User[]  = [
  //    new User("Michael","Lvovsky", 18, "Got Levin 9"),
  //    new User("Dani","Lvovsky", 28, "Ein Haemek"),
  //    new User("Israel","Israeli", 56, "Tel - Aviv"),
  //   ];
}