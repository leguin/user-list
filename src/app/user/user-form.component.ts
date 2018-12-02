import { Component } from '@angular/core';
import { User } from './user.entity';
import { UserService } from './user.service';


@Component({
  selector: 'user-form',
  template: `
  <div class="container">
    <h1>New User</h1>
    <form (ngSubmit)="onSubmit()" #userForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" required  [(ngModel)]="model.name" name="name">
      </div>
 
      <div class="form-group">
        <label for="lastname">Last Name</label>
        <input type="text" class="form-control" id="lastname" required  [(ngModel)]="model.lastname" name="lastname">
      </div>

      <div class="form-group">
        <label for="age">Age</label>
        <input type="text" class="form-control" id="age" required  [(ngModel)]="model.age" name="age">
      </div>
      
      <div class="form-group">
        <label for="address">Address</label>
        <input type="text" class="form-control" id="address" required  [(ngModel)]="model.address" name="address">
      </div>

      <button type="submit" class="btn btn-success" [disabled]="!userForm.form.valid">Submit</button>
 
    </form>
</div>
  `
})
export class UserFormComponent {

  model: User = new User('Michael', 'Lvovsky', 18, 'Got Levin 9, Haifa');

  submitted: boolean = false;

  constructor(private userService : UserService) {
    
  }

  onSubmit() 
  { 
    this.submitted = true; 
    this.userService.add(this.model);
  }
}