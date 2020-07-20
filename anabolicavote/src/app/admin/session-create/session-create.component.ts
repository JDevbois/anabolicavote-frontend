import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-session-create',
  templateUrl: './session-create.component.html',
  styleUrls: ['./session-create.component.css']
})
export class SessionCreateComponent implements OnInit {
  @Output() confirmed: EventEmitter<any> = new EventEmitter();
  votersFormGroup: FormGroup;
  confirmFormGroup: FormGroup;
  contacts: String[] = [];

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.votersFormGroup = this._formBuilder.group({
      firstCtrl: ['', [Validators.required, Validators.email]]
    });
    this.confirmFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  addContact() {
      this.contacts.push(this.votersFormGroup.value.firstCtrl);
  }

  deleteContact(contact: String) {
    this.contacts = this.contacts.filter(e => e !== contact);
  }

  confirm(){
    this.confirmFormGroup.reset();
    this.confirmed.emit(this.contacts);
  }

}
