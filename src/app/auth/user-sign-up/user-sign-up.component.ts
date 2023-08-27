import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss'],
})
export class UserSignUpComponent {
  signUpForm: FormGroup;
  
  
  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const formData = this.signUpForm.value;
  
      const apiUrl = 'http://localhost:8080/owner/register';
  
      // Make a POST request to the server
      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('Form submitted successfully:', response);
  
          // Optionally, you can reset the form after successful submission
          this.signUpForm.reset();
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please check your input.');
    }
  }
  
}
