import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-react-form2",
  templateUrl: "./react-form2.component.html",
  styleUrls: ["./react-form2.component.css"],
})
export class ReactForm2Component implements OnInit {
  reactiveForm: FormGroup;
  todayDate = new Date();
  formattedDate = this.todayDate.toISOString().slice(0, 10);
  //pattern for username
  unamePattern = "^[a-z0-9_-]{8,15}$";
  get username() {
    return this.reactiveForm.get("username");
  }

  createForm() {
    this.reactiveForm = new FormGroup({
      // User Details formgroup
      userDetails: new FormGroup({
        fullName: new FormControl(null, Validators.required),
        yourBirthday: new FormControl(null, Validators.required),
        gender: new FormControl("Male", Validators.required),
        country: new FormControl("India", Validators.required),
        phone: new FormControl(null, [Validators.required]),
        bio: new FormControl("Bio", Validators.maxLength(256)),
      }),

      // Account Details formgroup

      accountDetails: new FormGroup({
        username: new FormControl(" ", [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern("^[a-z0-9_-]{8,15}$"),
        ]),
        email: new FormControl("Example@mail.com", [
          Validators.required,
          Validators.email,
          Validators.pattern("^[a-z0-9._%+-]+@gmail.com"),
        ]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern("^[a-z0-9A-Z]"),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
      }),
    });
  }

  onSubmit() {}
  onClick() {
    // logging all form data
    console.log(`All form details`, this.reactiveForm);
    console.log(`All form Value`, this.reactiveForm.value);
    console.log(`All form Value`, this.reactiveForm.value.fullName);
  }
  // for phone
  onChange() {}

  ngOnInit() {
    const control = new FormControl("&", Validators.pattern("[0-9a-zA-Z ]*"));

    console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
  }
  constructor() {
    this.createForm();
  }
}
