import { Component, OnInit } from '@angular/core';
import {UserDto} from '../../dto/UserDto';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userDto: UserDto;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userDto = {
      id: '1',
      firstName: 'Vasya',
      lastName: 'Pupkin',
      birthDate: '1980-01-01',
      email: 'vasy@pupkin.com',
      phone: '017632874652'
    };
  }

  onUserSubmit(userDto: UserDto) {
    console.log(userDto);
    this.userService.update(userDto).subscribe(
      userDto => {
        console.log(userDto);
      }
    );
  }
}
