import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  registerForm: FormGroup | any;
  submitted = false

  constructor(private formBuilder: FormBuilder,private router:Router) {
    console.log("lazy loading.")
  }



  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Location_Id: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Location_Display_Name: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Search: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Street: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      City: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      State: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Country: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Postalcode: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Location_Title: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Location_Name: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
      Location_Number: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Location_Email: ['', [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
      // code:['', Validators.required]
//pattern="[a-zA-Z ]*"
    })
  }
  // touched(){}
  get f() { return this.registerForm.controls; }
  onSubmit(registerForm:any) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      for (const control of Object.keys(this.registerForm.controls)) {
        this.registerForm.controls[control].markAsTouched();
      }
      return;
    }
    const value:any[]=JSON.parse(localStorage.getItem("registerForm") || '[]');
    value.push(this.registerForm.value)
    localStorage.setItem("registerForm", JSON.stringify(value));
    console.log(value);
   
    this.router.navigate(['customer'])
    // console.log(registerForm)
    // display form values on success
   
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
