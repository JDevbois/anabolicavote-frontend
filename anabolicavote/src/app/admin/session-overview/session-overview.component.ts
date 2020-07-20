import { DataService } from './../../_services/data.service';
import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/_models/session.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-overview',
  templateUrl: './session-overview.component.html',
  styleUrls: ['./session-overview.component.css']
})
export class SessionOverviewComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'buttons'];
  dataSource: Session[];
  contacts: String[];
  createFormGroup: FormGroup;

  constructor(private _dataService: DataService, private _formBuilder: FormBuilder, private _router: Router) {
  }

  ngOnInit() {
    this.createFormGroup = this._formBuilder.group({
      titleCtrl: ['', Validators.required],
      descCtrl: ['', Validators.required]
    })
    this._dataService.getSessions().subscribe(value => {
      this.dataSource = value;
    })
  }

  onConfirm(event: any) {
    this.contacts = event;
  }

  submit() {
    const session = new Session(this.createFormGroup.get('titleCtrl').value, this.createFormGroup.get('descCtrl').value, this.contacts);
    this._dataService.createSession(session).subscribe(value => {
      this.ngOnInit();
    });
  }

  deleteSession(id: number) {
    this._dataService.deleteSession(id).subscribe(value => {
      this.ngOnInit();
    })
  }

  startSession(id: number) {
    this._dataService.startSession(id).subscribe(value => {
      sessionStorage.setItem('adminSessionId', id.toString());
      this._router.navigateByUrl('/admin/sessions/dashboard');
    });
  }
  
}
