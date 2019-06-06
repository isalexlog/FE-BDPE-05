import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-error',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.css']
})
export class ValidationErrorComponent implements OnInit {

  @Input()
  control: FormControl;

  @Input()
  errorMessage: string;

  formControl: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
