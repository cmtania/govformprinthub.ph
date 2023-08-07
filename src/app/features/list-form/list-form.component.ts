import { Component, OnInit } from '@angular/core';
import { GovernmentFormDetail } from '../../model/gorv-form-detail.model';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
 

  listForm: Array<GovernmentFormDetail> = []

  
  ngOnInit(): void {
    const form = new GovernmentFormDetail();
    form.Name = "Philippine Postal ID";
    form.Department = "PhylSis";
    form.Year = 2022;
    form.DownloadLink = "https://www.postalidph.com/uploads/5/8/5/0/58500909/pid_application_form.pdf";
    this.listForm.push(form);
    this.listForm.push(form);
    this.listForm.push(form);
    this.listForm.push(form);
    this.listForm.push(form);
    this.listForm.push(form);
  }
}
