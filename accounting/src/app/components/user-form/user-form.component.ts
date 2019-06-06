import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserDto} from '../../dto/UserDto';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  signupForm: FormGroup;

  @Input()
  submitButtonLabel = 'Register';

  @Input()
  userDto: UserDto;

  @Output()
  submitUser: EventEmitter<UserDto> = new EventEmitter();

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signupForm = this.fb.group({
      id: [
        null
      ],
      firstName: [
        null, [
          Validators.required
        ]
      ],
      lastName: [
        null, [
          Validators.required
        ]
      ],
      birthDate: [
        null, [
          Validators.required
        ]
      ],
      email: [
        null, [
          Validators.required
        ]
      ],
      phone: [
        null, [
          Validators.required
        ]
      ]
    });

    if (this.userDto) {
      this.signupForm.setValue(this.userDto);
    }
  }

  onSubmit($event) {
    this.submitUser.emit(this.signupForm.value);
  }

}
