import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api.service';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  values: {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getValues().subscribe(res => {
      this.values = res;
    });
  }

}
