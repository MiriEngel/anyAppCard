import { Component } from "@angular/core";
import { FormGroup, Validators ,FormBuilder } from "@angular/forms";
import { CardComponent } from '../card/card.component';
import { User } from "../../shared/user";

@Component({
  selector: "user-form",
  templateUrl: "./userForm.component.html",
  providers: [CardComponent]
})

export class UserFormComponent {
  user = new User(1, '', '', '', '', '');
  isComplete:boolean = false;
  userForm: FormGroup;
  // titleAlert: string = 'This field is required';

 constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      "firstName": [this.user.firstName, Validators.required],
      "lastName": [this.user.lastName, Validators.required],
      "mail": [this.user.mail, [Validators.required, Validators.email]],
      "phone": [this.user.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]],
      "address": [this.user.address],
    });
  }

 
  onSubmit() {
    if (!this.userForm.valid) {
      this.markFormGroupTouched(this.userForm);
      return;
    }
    this.isComplete = true;
    this.user = this.userForm.value;
  }


  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        control.controls.forEach(c => this.markFormGroupTouched(c));
      }
    });
  }
}
