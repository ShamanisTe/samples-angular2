import { Component, OnInit, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven2',
  templateUrl: './templatedriven2.component.html',
  styleUrls: ['./templatedriven2.component.css']
})
export class Templatedriven2Component implements OnInit, AfterViewChecked {

  user: any = {};
  @ViewChild('templatedrivenform') currentForm: NgForm;
  templatedrivenformErrors: any = {
    'firstname': '',
    'lastname': ''
  };
  templatedrivenformValidationMessages = {
    'firstname': {
      'required':      'firstname is required.',
      'minlength':     'firstname must be at least 4 characters long.',
      'maxlength':     'firstname cannot be more than 56 characters long.'
    },
    'lastname': {
      'required': 'lastname is required.'
    }
  };


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.currentForm) {
      this.currentForm
        .valueChanges
        .subscribe(data => this.onValueChanged(data));
    }
  }

  onValueChanged(data?: any) {
    if (!this.currentForm) { return; }
    const form = this.currentForm.form;

    for (const field in this.templatedrivenformErrors) {
      if (this.templatedrivenformErrors.hasOwnProperty(field)) {

        this.templatedrivenformErrors[field] = '';

        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.templatedrivenformValidationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.templatedrivenformErrors[field] += messages[key] + ' ';
            }
          }
        }

      }
    }
  }



}
