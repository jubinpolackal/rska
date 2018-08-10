import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  name: FormControl;
  phone: FormControl;
  email: FormControl;
  message: FormControl;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.contactForm.reset();
  }

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}'));
    this.phone = new FormControl('', Validators.required);
    this.message = new FormControl('', Validators.required);
  }

  createForm() {
    this.contactForm = new FormGroup({
      name: this.name,
      email: this.email,
      phone: this.phone,
      message: this.message
    });
  }

  onSubmit() {
    console.log('Submit tapped ...');
    if (this.contactForm.valid) {
      console.log('Form Submitted ...');
      console.log(this.name.value);
      console.log(this.email.value);
      console.log(this.phone.value);
      console.log(this.message.value);
      this.contactForm.reset();
    } else {
      console.log('Form not valid');
      this.validateAllFormFields(this.contactForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
