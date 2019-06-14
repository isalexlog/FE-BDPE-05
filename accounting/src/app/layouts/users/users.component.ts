import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserDto[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(
      (users: UserDto[]) => {
        console.log(users);
        this.users = users;
      },
      error => console.log(error)
    );
  }

}
