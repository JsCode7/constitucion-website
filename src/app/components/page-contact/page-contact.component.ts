import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './page-contact.component.html',
  styleUrl: './page-contact.component.css'
})
export class PageContactComponent {
   contactForm: FormGroup;

   constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
   }

   onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted');
      console.log(this.contactForm.value)
    } else {
      console.log('Form not submitted');
    }
   }
}
