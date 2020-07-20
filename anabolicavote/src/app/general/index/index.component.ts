import { DataService } from './../../_services/data.service';
import { AuthorisationService } from './../../_services/authorisation.service';
import { Component, OnInit } from '@angular/core';
import { Router, Data } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loginFormGroup: FormGroup;
  codeFormGroup: FormGroup;

  constructor(private authService: AuthorisationService, private _dataService: DataService, private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this._formBuilder.group({
      usernameCtrl: ['', Validators.required],
      passwdCtrl: ['', Validators.required]
    })

    this.codeFormGroup = this._formBuilder.group({
      codeCtrl: ['', Validators.required]
    })
  }

  verifyCode(){
    const code = this.codeFormGroup.get('codeCtrl').value;
    this._dataService.verifyCode(code).subscribe(value => {
      if (value !== null){
        sessionStorage.setItem('sessionId', value.toString());
        sessionStorage.setItem('code', code);
        this.router.navigateByUrl('voter/polls');
      }
      // [routerLink]="['voter/polls']"
    })
  }

  login(){
    this.authService.login(this.loginFormGroup.get('usernameCtrl').value, this.loginFormGroup.get('passwdCtrl').value).subscribe(value => {
      if (value) {
        this.router.navigateByUrl('/admin/sessions')
      } else {
      }
    });
  }
  registerInit() {
      this.authService.registerInit().subscribe(value => {
      });
  }

}
