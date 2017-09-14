import { Component, OnInit } from '@angular/core';
import {FormControl, Validators , NgForm, FormGroup, FormBuilder,} from '@angular/forms';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
        'CurrentPassword': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
        'password': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
        'ConfirmPassword': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
      })
  }
  changePassword(){
  }
}
