import { Component, OnInit } from '@angular/core';
import {UserDto} from '../../dto/UserDto';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onUserSubmit(userDto: UserDto) {
    console.log(userDto);
    this.userService.create(userDto).subscribe(
      (newUser: UserDto) => {
        console.log('Created user');
        console.log(newUser);
      }
    );
  }

}
