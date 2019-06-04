import { Component, OnInit } from '@angular/core';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userDto: UserDto;

  constructor() { }

  ngOnInit() {
    this.userDto = {
      firstName: 'Vasya',
      lastName: 'Pupkin',
      birthDate: '1980-01-01',
      email: 'vasy@pupkin.com',
      phone: '017632874652'
    };
  }

}
