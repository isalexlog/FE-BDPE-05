import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  signupForm: FormGroup;
  submitButtonLabel: string;

  @Input()
  registration = false;

  @Input()
  userDto: UserDto;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.submitButtonLabel = this.registration
      ? 'Register'
      : 'Update';

    console.log(this.userDto);
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      firstName: [
        this.userDto.firstName, [
          Validators.required
        ]
      ],
      lastName: [
        this.userDto.lastName, [
          Validators.required
        ]
      ],
      birthDate: [
        this.userDto.birthDate
      ],
      email: [
        this.userDto.email
      ],
      phone: [
        this.userDto.phone
      ]
    });
  }

  onSubmit($event) {
    console.log($event);
    console.log(this.signupForm.value);
  }

}
