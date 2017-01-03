import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector:    'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls:   ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {
  
  selfFormGroup: FormGroup;
  templatedrivenformValidationMessages = {
    'firstname': [
      {
        validator: 'required',
        msg:       'firstname is required.'
      },
      {
        validator: 'minlength',
        msg:       'firstname must be at least 4 characters long.'
      },
      {
        validator: 'maxlength',
        msg:       'firstname cannot be more than 56 characters long.'
      }
    ],
    'lastname':  {
      'required': 'lastname is required.'
    }
  };
  
  constructor( fb: FormBuilder ) {
    
    // fb.group <==> new FormGroup
    this.selfFormGroup = fb.group({
      "firstname": ['default Firstname', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
      "lastname":  new FormControl(null, Validators.compose([Validators.required, customValidator])), //[null, Validators.compose([Validators.required, customValidator])]
      // Worth to use FormGroup instead of fb.group to add validator on FormGroup
      "pwd": new FormGroup({
        "password": new FormControl(null, Validators.required),
        "passwordconfirm": new FormControl(null, Validators.required)
      }, passwordMatchValidator)
    });
    
    console.log(this.selfFormGroup);
    
    this.listenLastnameChange();
  }
  
  ngOnInit() {
  }
  
  /**
   * get data from FormBuilder
   * @param formValues
   */
  onSubmit( formValues: any ) {
    console.log(formValues);
  }
  
  /**
   * follow change for lastname control
   */
  listenLastnameChange() {
    this.selfFormGroup
      .controls['lastname']
      .valueChanges
      .subscribe(lastnameValue => {
        console.log("lastname change=" + lastnameValue);
      })
  }
}

// validator for FormControl
function customValidator( c: FormControl ) {
  return c.value && c.value.indexOf('last') != -1 ? null : {
    'customValidator': true
  };
}

// validator for FormGroup
function passwordMatchValidator(g: FormGroup) {
  return g.get('password').value === g.get('passwordconfirm').value
    ? null : {'mismatch': true};
}