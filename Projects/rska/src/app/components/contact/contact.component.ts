import { ApiService } from './../../services/api.service';
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

  successMessage = 'Thank You for reaching out to us. We will be contacting you soon.';
  errorMessage = '';
  shouldShowSuccessMessage = false;
  shouldShowErrorMessage = false;

  constructor(private formBuilder: FormBuilder,
              private apiService: ApiService) {

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
      this.apiService.postContactUs(this.name.value,
                                    this.phone.value,
                                    this.email.value,
                                    this.message.value).subscribe(res => {
                                      console.dir(res);
                                      if (res.status === 200 ) {
                                        alert(this.successMessage);
                                      } else {
                                        alert(res.error);
                                      }
                                    });
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
