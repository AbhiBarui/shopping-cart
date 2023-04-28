import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'
import { RegistrationService } from 'src/app/services/registration.service'

/**
 *
 * @param form
 */

function passwordsMatchValidator(form: { get: (arg0: string) => any; }) {
  const password = form.get('password')
  const confirmPassword = form.get('confirmPassword')

  if(password.value !== confirmPassword.value) {
    confirmPassword.setErrors({ passwordsMatch: true })
  } else {
    confirmPassword.setErrors(null)
  }

  return null
}

/**
 * If the data is valid return null else return an object
 */
function symbolValidator(control: { hasError: (arg0: string) => any; value: string | string[]; }) { //control = registerForm.get('password')
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;

  if(control.value.indexOf('@') > -1) {
    return null
  } else {
    return { symbol: true }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder, private http: HttpClient, private router: Router, private registrationService: RegistrationService) { }

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.registerForm = this.builder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
      confirmPassword: ''
    }, {
      validators: passwordsMatchValidator
    })
  }

  // register() {
  //   console.log(this.registerForm.value)
  //   this.http.post<any>(signedupUserUrl, this.registerForm.value)
  //   .subscribe(res=>{
  //     // alert("Signup Successful!");
  //     this.registerForm.reset;
  //     this.router.navigate(['login']);
  //   }),(err: any)=>{
  //     alert("Something went wrong !!")
  //   }
  // }

  register() {
    this.registrationService.addUser(this.registerForm.value)
    .subscribe(res=>{
      this.registerForm.reset;
      this.router.navigate(['login']);
    }),(err: any)=>{
      alert("Something went wrong !!")
    }
  }

}